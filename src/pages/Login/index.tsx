import React from "react";
import Login from "src/components/Forms/LoginForm/";
import SignUp from "src/components/Forms/SignUp/";
import { CssBaseline, Paper, Typography, Tabs, Tab } from "@material-ui/core";
import styles from "./Login.module.css";
interface IContainerProps {
  children: React.ReactNode;
}
function TabContainer(props: IContainerProps) {
  return (
    <Typography
      component="div"
      style={{ padding: 8 * 3 }}
      className={styles.detailsContainer}
    >
      {props.children}
    </Typography>
  );
}
const login = () => {
  const [value, setValue] = React.useState(0);
  function handleChange(event: any, newValue: any) {
    setValue(newValue);
  }
  return (
    <main className={styles.main}>
      <CssBaseline />
      <Paper className={styles.paper}>
        <Typography component="h1" variant="h5">
          Welcome To EYRA!
        </Typography>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          className={styles.tabsContainer}
          variant="fullWidth"
          centered={true}
        >
          <Tab label="Login" />
          <Tab label="Sign Up" />
        </Tabs>
        {value === 0 && (
          <TabContainer>
            <Login />
          </TabContainer>
        )}
        {value === 1 && (
          <TabContainer>
            <SignUp />
          </TabContainer>
        )}
      </Paper>
    </main>
  );
};

export default login;
