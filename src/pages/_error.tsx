import React from 'react';
import { NextContext } from 'next';

export default class extends React.Component {
  static async getInitialProps(ctx: NextContext) {
    console.log(ctx);
    return { ...ctx, req: null, res: null };
  }
  render() {
    return <div>OOPS ERROR {JSON.stringify(this.props)}</div>;
  }
}
