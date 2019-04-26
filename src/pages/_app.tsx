import App, {Container} from 'next/app';
import React from 'react';
import { getSettings, settings } from '../settings';
import { setupPrismic } from '../services/prismicApi';
import { comicApi } from '../services/comicApi';
import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import theme from 'src/theme';
// import RootLayout from 'src/components/RootLayout';

import getConfig from 'next/config';
// Only holds serverRuntimeConfig and publicRuntimeConfig from next.config.js nothing else.
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

export default class MyApp extends App {
  async componentWillMount() {
    console.log(publicRuntimeConfig.prismicEndpoint);
    await setupPrismic(publicRuntimeConfig.prismicEndpoint);
    comicApi.setBaseURL(publicRuntimeConfig.backendURL);
  }

  static async setup() {

  }

  static async getInitialProps({ Component, router, ctx }: any) {
    await this.setup();
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
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </MuiThemeProvider>
      </Container>
    );
  }
}
