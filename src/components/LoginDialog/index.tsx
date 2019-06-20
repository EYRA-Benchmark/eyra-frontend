import React from 'react';
import Login from 'src/components/Forms/LoginForm';
import SignUp from 'src/components/Forms/SignUp';

import { Paper, Typography, Tabs, Tab, Container } from '@material-ui/core';
import styles from './Login.module.css';

import Slide from '@material-ui/core/Slide';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

interface ILoginDialogProps {
  open: boolean;
  onClose: () => any | undefined;
}

// tslint:disable-next-line:no-shadowed-variable
const Transition = React.forwardRef(function Transition(props, ref) {
  // @ts-ignore
  return <Slide direction="up" ref={ref} {...props} />;
});

const tabs = [
  {
    label: 'Login',
    component: Login,
  },
  {
    label: 'Sign up',
    component: SignUp,
  },
];

const LoginDialog = (props: ILoginDialogProps) => {
  const [activeTabIndex, setActiveTabIndex] = React.useState(0);
  const TabComponent = tabs[activeTabIndex].component;
  return (
    <Dialog
      open={props.open}
      TransitionComponent={Transition as any}
      keepMounted={true}
      onClose={() => props.onClose && props.onClose()}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle id="alert-dialog-slide-title">
        <Typography component="h1" variant="h5">
          Welcome to EYRA!
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Paper className={styles.paper}>
          <Tabs
            value={activeTabIndex}
            onChange={(event, value) => setActiveTabIndex(value)}
            indicatorColor="primary"
            className={styles.tabsContainer}
            variant="fullWidth"
            centered={true}
          >
            {tabs.map((tab, index) => (
              <Tab key={index} label={tab.label} />
            ))}
          </Tabs>
          <Container>
            <TabComponent />
          </Container>
        </Paper>

        <DialogContentText id="alert-dialog-slide-description" />
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
