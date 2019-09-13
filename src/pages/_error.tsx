import React from 'react';
import { NextPageContext } from 'next';
import Error404 from 'src/components/Errors/Error404';

interface IProps {
  statusCode: number;
}

export default class extends React.Component<IProps> {
  static async getInitialProps(ctx: NextPageContext) {
    console.log('oops error', ctx.asPath, ctx.res!.statusCode);
    return {
      path: ctx.asPath,
      statusCode: ctx.res!.statusCode,
      statusMessage: ctx.res!.statusMessage,
    };
  }
  render() {
    if (this.props.statusCode === 404) {
      return <Error404 />;
    }
    return <div>OOPS ERROR {JSON.stringify(this.props)}</div>;
  }
}
