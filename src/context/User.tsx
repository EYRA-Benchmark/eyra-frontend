import React from 'react';
import { settings } from '../settings';

import { comicApi } from '../services/comicApi';

enum Status {
  LOGGING_IN,
  LOGGED_OUT,
  LOGGED_IN,
}

export interface IUser {
  first_name: string;
  last_name: string;
}

export function isLoggedIn(user: IUser | null): user is IUser {
  return user !== null;
}

interface IState {
  user: IUser | null;
  status: Status;
}

export type IUserProps = IState & {
  signup: typeof UserProvider.prototype.signup;
  login: typeof UserProvider.prototype.login;
  logout: typeof UserProvider.prototype.logout;
  refresh: typeof UserProvider.prototype.refresh;
}

const defaultState: IState = {
  user: null,
  status: Status.LOGGED_OUT,
}

export const UserContext = React.createContext<IUserProps>(defaultState as IUserProps);

export class UserProvider extends React.Component<{}, IState> {
  state = {
    ...defaultState
  }

  componentWillMount() {
    this.refresh();
  }

  async refresh () {
    this.setState({ status: Status.LOGGING_IN });
    try {
      this.setState({
        user: await comicApi.me() || null,
        status: Status.LOGGED_IN
      });
    } catch(e) {
      this.setState({
        user: null,
        status: Status.LOGGED_OUT,
      });
      console.log('refresh error', e);
    }
  }

  signup() {
    // todo
  }

  login () {
    document.location.href = `${settings.backendURL}/social/login/google-oauth2/?next=${document.location.origin}`;
  }

  logout() {
    this.setState({ user: null, status: Status.LOGGED_OUT });
    comicApi.setToken(null);
  }

  render() {
    const { user, status } = this.state;
    const { children } = this.props;

    return (
      <UserContext.Provider
        value={{
          user,
          status,
          signup: this.signup.bind(this),
          login: this.login.bind(this),
          logout: this.logout.bind(this),
          refresh: this.refresh.bind(this),
        }}
      >
        {children}
      </UserContext.Provider>
    );
  }
}

export const UserConsumer = UserContext.Consumer;

// https://github.com/Microsoft/TypeScript/issues/15713
export const withUser = <T extends object>(Component: React.ComponentType<T & IUserProps>) => (props: T) => (
  <UserConsumer>
    {(userProps: IUserProps) => <Component {...props} {...userProps} />}
  </UserConsumer>
);

