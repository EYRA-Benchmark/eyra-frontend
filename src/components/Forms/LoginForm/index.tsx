import * as React from 'react';
import styles from './LoginForm.module.css';
import GoogleSigninButton from 'src/assets/images/btn_google_signin_dark_normal_web.png';
import { IUserProps, withUser } from 'src/context/User';
import LoginForm from './Login';
const Login = ({ login, refresh }: IUserProps) => {
  return (
    <>
      <LoginForm onLogin={refresh} />
      <form className={styles.form}>
        <div className={styles.googleLogin}>
          <a onClick={login}>
            <img src={GoogleSigninButton} alt="Sign in with google" />
          </a>
        </div>
      </form>
    </>
  );
};

export default withUser(Login);
