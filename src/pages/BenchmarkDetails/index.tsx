import * as React from 'react';
import { NextContext } from 'next';

import { comicApi } from '../../services/comicApi';
import { IBenchmark } from '../../types/benchmark';
import Details from './DetailsLayout';
import { Container } from '@material-ui/core';
interface IProps {
  benchmark: IBenchmark;
}

export default class BenchmarkDetails extends React.Component<IProps> {
  static async getInitialProps(ctx: NextContext<{ id: string }>): Promise<IProps> {
    return {
      benchmark: await comicApi.benchmark(ctx.query.id),
    };
  }

  render() {
    return <Container><Details data={this.props.benchmark} /></Container>
  }
}

