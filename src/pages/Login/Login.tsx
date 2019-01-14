import * as React from 'react';
import AnimateComponent from '../../components/Animation/AnimateComponent';

import GoogleSigninButton from '../../assets/images/btn_google_signin_dark_normal_web.png';
import { settings } from '../../settings';

const Login = () => {
  return <div>
    <a href={settings.backendURL + '/social/login/google-oauth2'}>
      <img src={GoogleSigninButton} alt="Sign in with google"/>
    </a>
  </div>;
}

export default AnimateComponent(Login);
