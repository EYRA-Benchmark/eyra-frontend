import * as React from 'react';
import AnimateComponent from '../../components/Animation/AnimateComponent';

import GoogleSigninButton from '../../assets/images/btn_google_signin_dark_normal_web.png';
// import { settings } from '../../settings';

import { IUserProps, withUser, } from '../../context/User';

const Login = ({ login }: IUserProps) => {
  return <div>
    <a onClick={login}>
      <img src={GoogleSigninButton} alt="Sign in with google"/>
    </a>
  </div>;
}

export default AnimateComponent(withUser(Login));
