import React from 'react';
import Router from 'next/router';
import { comicApi } from 'src/services/comicApi';
import { IUser } from '../types';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

enum Status {
  LOGGING_IN,
  LOGGED_OUT,
  LOGGED_IN,
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
  oauthLogin: typeof UserProvider.prototype.oauthLogin;
};

const defaultState: IState = {
  user: null,
  status: Status.LOGGED_OUT,
};

export const UserContext = React.createContext<IUserProps>(
  defaultState as IUserProps,
);

export class UserProvider extends React.Component<{}, IState> {
  state = {
    ...defaultState,
  };

  componentWillMount() {
    this.refresh();
  }

  async refresh() {
    this.setState({ status: Status.LOGGING_IN });
    try {
      const me = await comicApi.me();
      this.setState({
        user: me || null,
        status: Status.LOGGED_IN,
      });
    } catch (e) {
      this.setState({
        user: null,
        status: Status.LOGGED_OUT,
      });
    }
  }

  async signup(
    {
      first_name,
      last_name,
      email,
      password,
    }: {
      first_name: string,
      last_name: string,
      email: string,
      password: string,
    }) {
    return await comicApi.registration({ first_name, last_name, email, password });
  }

  oauthLogin() {
    document.location.href = `${
      publicRuntimeConfig.backendURL
      }social/login/google-oauth2/?next=${document.location.origin}`;
  }

  async login({ email, password }: { email: string, password: string }) {
    try {
      const result = await comicApi.login({ email, password });
      if (result && result.token) {
        comicApi.setToken(result.token);
        return this.refresh();
      } else {
        throw new Error('Login error');
      }
    } catch (e) {
      throw e;
    }
  }

  logout() {
    this.setState({ user: null, status: Status.LOGGED_OUT });
    comicApi.setToken(null);
    this.refresh();
    if (Router.route === '/profile') { Router.push('/') }
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
          oauthLogin: this.oauthLogin.bind(this),
        }}
      >
        {children}
      </UserContext.Provider>
    );
  }
}

export const UserConsumer = UserContext.Consumer;

// https://github.com/Microsoft/TypeScript/issues/15713
export const withUser = <T extends object>(
  Component: React.ComponentType<T & IUserProps>,
) => {
  const WrappedComponent = (props: T) => (
    <UserConsumer>
      {(userProps: IUserProps) => <Component {...props} {...userProps} />}
    </UserConsumer>
  );

  WrappedComponent.getInitialProps = (Component as any).getInitialProps;

  return WrappedComponent;
};
