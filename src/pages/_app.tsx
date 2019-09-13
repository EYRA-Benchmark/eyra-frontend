import App from 'next/app';
import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';
import { UserProvider } from 'src/context/User';
import Header from 'src/components/Header/Header';
import SideDrawer from 'src/components/SideDrawer/SideDrawer';
import Footer from 'src/components/Footer/Footer';

import theme from 'src/theme';
import { Router } from 'next/router';

import NProgress from 'nprogress';

import styles from './root.css';

NProgress.configure({ easing: 'ease', speed: 500 });
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeError', () => NProgress.done());

export interface IState {
  showSideDrawer: boolean;
}

export default class MyApp extends App<{}, {}, IState> {
  state: IState = {
    showSideDrawer: false,
  };
  componentDidMount() {
    // Remove the server-side injected CSS.
    // const jssStyles = document.querySelector('#jss-server-side');
    // if (jssStyles && jssStyles.parentNode) {
    //   jssStyles.parentNode.removeChild(jssStyles);
    // }
    Router.events.on('routeChangeComplete', (url) => {
      try {
        NProgress.done();
      } catch (e) {
        console.log(e);
      }
      try {
        (window as any).gtag('config', 'UA-142543978-1', {
          page_location: url,
          anonymize_ip: true,
        });
      } catch (error) {
        console.log(error);
      }
    });
  }
  sideDrawerToggleHandler = () => {
    this.setState({showSideDrawer: !this.state.showSideDrawer });
  }

  // static async getInitialProps({ Component, router, ctx }: AppContext) {
  //   let pageProps = {};
  //
  //   if (Component.getInitialProps) {
  //     pageProps = await Component.getInitialProps(ctx);
  //   }
  //
  //   return { pageProps };
  // }

  render() {
    const { Component, pageProps, router } = this.props;

    const Wrapper = (props: any) => router.route === '/Home'
      ? <>{props.children}</>
      : (
        <div id="root_container">
          <main className={styles.container}>
            <div className={styles.bannerBackground} id="about">
              <img src="/static/images/lightPaw.png" style={{ maxWidth: '100%' }} />
            </div>
            {props.children}
          </main>
        </div>
      );

    return (
      <UserProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header drawerToggle={this.sideDrawerToggleHandler} />
          <SideDrawer open={this.state.showSideDrawer} />
          <Wrapper>
            <Component {...pageProps} />
          </Wrapper>
          <Footer />
        </ThemeProvider>
      </UserProvider>
    );
  }
}
