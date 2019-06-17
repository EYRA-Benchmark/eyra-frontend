import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/styles';
import flush from 'styled-jsx/server';
import theme from 'src/theme';
import NextHead from 'next/head';
import CleanCSS from 'clean-css';

class MyDocument extends Document {
  render() {
    return (
      <html lang="en" dir="ltr">
        <Head>

          <meta name="description" content="EYRA is platform for benchmarking scientific algorithms"></meta>
          <meta charSet="utf-8" />
          {/* Use minimum-scale=1 to enable GPU rasterization */}
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          {/* PWA primary color */}
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
          />
          <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet" />
          <link
            rel="stylesheet"
            href="/static/style/index.css"
          />
          <link
            rel="stylesheet"
            href="/static/style/nprogress.css"
          />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.1.0/css/all.css"
            integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt"
            crossOrigin="anonymous"
          />
          <link rel="shortcut icon" href="/static/favicon.ico" />

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

class MinimizedServerStyleSheets extends ServerStyleSheets {
  toString(): string {
    return new CleanCSS().minify(super.toString()).styles;
  }
}

// There is some magic involved getting Material UI style right client+server side, see the ref:
// tslint:disable-next-line:max-line-length
// https://github.com/mui-org/material-ui/blob/4723c57a9f9a8a5008da08602428c190a46ef494/examples/nextjs-next/pages/_document.js

MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new MinimizedServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  NextHead.rewind();

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: (
      <React.Fragment>
        {sheets.getStyleElement()}
        {flush() || null}
      </React.Fragment>
    ),
  };
};

export default MyDocument;
