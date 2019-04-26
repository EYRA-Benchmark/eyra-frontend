import App, {Container} from 'next/app'
import React from 'react'
import { getSettings, settings } from '../settings';
import { setupPrismic } from '../services/prismicApi';
import { comicApi } from '../services/comicApi';

export default class MyApp extends App {
  componentDidMount() {
    console.log('cwm');
  }

  static async getInitialProps ({ Component, router, ctx }) {

    await getSettings();
    await setupPrismic();
    comicApi.setBaseURL(settings.backendURL);


    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {pageProps}
  }

  render () {
    const {Component, pageProps} = this.props
    return <Container>
      <Component {...pageProps} />
    </Container>
  }
}