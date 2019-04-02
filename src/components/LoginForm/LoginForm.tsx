import { Avatar, CssBaseline, Paper, Typography } from "@material-ui/core";
// import Button from "@material-ui/core/Button";
// import FormControl from "@material-ui/core/FormControl";
// import Input from "@material-ui/core/Input";
// import InputLabel from "@material-ui/core/InputLabel";
import { LockOutlined as LockOutlinedIcon } from "@material-ui/icons";
import * as React from "react";
import styles from "./LoginForm.module.css";

import GoogleSigninButton from "../../assets/images/btn_google_signin_dark_normal_web.png";
// import { settings } from '../../settings';

import { IUserProps, withUser } from "src/context/User";
const Login = ({ login }: IUserProps) => {
  return (
    <main className={styles.main}>
      <CssBaseline />
      <Paper className={styles.paper}>
        <Avatar classes={{ colorDefault: styles.avatar }}>
          <LockOutlinedIcon color="primary" />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>

        <form className={styles.form}>
          <div className={styles.googleLogin}>
            <a onClick={login}>
              <img src={GoogleSigninButton} alt="Sign in with google" />
            </a>
          </div>
          {/* <FormControl margin="normal" required={true} fullWidth={true}>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input
              id="email"
              name="email"
              autoComplete="email"
              autoFocus={true}
            />
          </FormControl>
          <FormControl margin="normal" required={true} fullWidth={true}>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              name="password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
          </FormControl>

          <Button
            classes={{ root: styles.submit }}
            type="submit"
            fullWidth={true}
            variant="contained"
            color="primary"
          >
            Sign in
          </Button>
          <Button color="primary" size="small">
            Forgot Password?
          </Button> */}
        </form>
      </Paper>
    </main>
  );
};

export default withUser(Login);
