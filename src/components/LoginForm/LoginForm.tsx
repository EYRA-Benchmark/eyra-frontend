import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import * as React from "react";
import styles from "./LoginForm.module.css";
function LoginForm() {
  return (
    <main className={styles.main}>
      <CssBaseline />
      <Paper className={styles.paper}>
        <Avatar classes={{ colorDefault: styles.avatar }}>
          <LockOutlinedIcon color="secondary" />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={styles.form}>
          <FormControl margin="normal" required={true} fullWidth={true}>
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
          </Button>
        </form>
      </Paper>
    </main>
  );
}

export default LoginForm;
