import App, {Container, NextAppContext} from 'next/app';
import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';
import classNames from 'classnames';

import { UserProvider } from 'src/context/User';
import Header from 'src/components/Header/Header';
import styles from 'src/components/RootLayout/Layout.module.css';
import SideDrawer from 'src/components/SideDrawer/SideDrawer';
import Footer from 'src/components/Footer/Footer';

import theme from 'src/theme';
import Router from 'next/router';

import NProgress from 'nprogress';

NProgress.configure({ easing: 'ease', speed: 500 });
Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default class MyApp extends App {
  pageContext: any;
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  static async getInitialProps({ Component, router, ctx }: NextAppContext) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return {pageProps};
  }

  render() {
    const {Component, pageProps} = this.props;
    return (
        <Container>
          <UserProvider>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Header
                classes={classNames(
                  styles.appBar,
                )}
                drawerToggle={() => console.log('drawer toggle')}
              />
              <SideDrawer open={true} />
              <Component {...pageProps} />
              <Footer />
            </ThemeProvider>
          </UserProvider>
        </Container>
    );
  }
}
