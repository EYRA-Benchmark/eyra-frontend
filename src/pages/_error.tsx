import React from 'react';
import { NextContext } from 'next';

export default class extends React.Component {
  static async getInitialProps(ctx: NextContext) {
    console.log('oops error', ctx.asPath, ctx.res!.statusCode);
    return { ctx: ctx.jsonPageRes, path: ctx.asPath, statusCode: ctx.res!.statusCode, statusMessage: ctx.res!.statusMessage };
  }
  render() {
    return <div>OOPS ERROR {JSON.stringify(this.props)}</div>;
  }
}
