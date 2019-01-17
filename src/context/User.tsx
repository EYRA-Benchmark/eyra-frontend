import React from 'react';
import { settings } from '../settings';

import axios from "axios";

enum Status {
  LOGGING_IN,
  LOGGED_OUT,
  LOGGED_IN,
}

interface IUser {
  name: string;
}

interface IState {
  user: IUser | null;
  status: Status;
}

export type IProps = IState & {
  signup: typeof UserProvider.prototype.signup;
  login: typeof UserProvider.prototype.login;
  logout: typeof UserProvider.prototype.logout;
  refresh: typeof UserProvider.prototype.refresh;
}

// https://medium.com/@thehappybug/using-react-context-in-a-typescript-app-c4ef7504c858
// Unfortunately, TypeScript’s compiler will complain here as providing a defaultValue is compulsory
// export const UserContext = React.createContext<IProps>(defaultProps);
export const UserContext = React.createContext<IProps | null>(null);

export class UserProvider extends React.Component {
  state = {
    user: null,
    status: Status.LOGGED_OUT,
  }

  async componentWillMount() {
    // check if token is in storage
    const token = document.location.href.split("?token=")[1];
    console.log('token', token);
    if (token) {
      const res = await axios.get(settings.backendURL+'/challenges/');
      console.log('res', res);
      // const verifyTokenResult = await SeedorfAPI.verifyToken(token);
      // if (verifyTokenResult.ok) {
      //   await setToken(token);
      //   this.refresh();
      //   return;
      // }
    }

    // this.logout();
  }

  queryUser = async () => {
    // const token = await AsyncStorage.getItem('TOKEN');
    // const claims = JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString('ascii'));
    // const { uuid } = claims;
    // const queryResult = await client.query({
    //   fetchPolicy: 'network-only',
    //   query: GET_USER_DETAILS,
    //   variables: { uuid },
    // });
    // return queryResult.data.user;
  }

  refresh () {
    // const user = await this.queryUser();
    // this.setState({ user });
  }

  signup() {
    // test
  }

  login () {
    document.location.href = `${settings.backendURL}/social/login/google-oauth2/?next=${document.location.origin}`;
  }

  logout() {
    // this.setState({ user: null });
    // client.setToken(null);
    // SeedorfAPI.setToken(null);
    // client.resetStore();
    // await AsyncStorage.removeItem('TOKEN');
  }

  render() {
    const { user, status } = this.state;
    console.log('render', status);
    // if (status === Status.LOGGING_IN) {
    //   return <CenteredActivityIndicator />;
    // }

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

export const withUser = <T extends object>(Component: React.ComponentType<T>) => (props: T) => (
  <UserConsumer>
    {userProps => <Component {...props} {...userProps} />}
  </UserConsumer>
);

