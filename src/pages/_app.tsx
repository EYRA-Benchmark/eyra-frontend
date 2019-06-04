import App, { Container, NextAppContext } from 'next/app';
import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';
import classNames from 'classnames';
import { UserProvider } from 'src/context/User';
import Header from 'src/components/Header/Header';
import SideDrawer from 'src/components/SideDrawer/SideDrawer';
import Footer from 'src/components/Footer/Footer';

import theme from 'src/theme';
import Router from 'next/router';

import NProgress from 'nprogress';

import styles from './root.module.css';

NProgress.configure({ easing: 'ease', speed: 500 });
Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default class MyApp extends App {
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

    return { pageProps };
  }

  render() {
    const { Component, pageProps, router } = this.props;


    const Wrapper = (props: any) => router.route === '/Home'
      ? <>{props.children}</>
      : (
        <div id="root_container">
          <main className={styles.container}>
            <div className={styles.bannerBackground} id="about">
              <img src="/static/images/PawLight.png" />
            </div>
            {props.children}
          </main>
        </div>
      );

    return (
      <Container>
        <UserProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            <SideDrawer open={true} />
            <Wrapper>
              <Component {...pageProps} />
            </Wrapper>
            <Footer />
          </ThemeProvider>
        </UserProvider>
      </Container>
    );
  }
}
