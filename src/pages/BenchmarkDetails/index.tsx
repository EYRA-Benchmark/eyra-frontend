import * as React from 'react';
import { NextContext } from 'next';
import Head from 'next/head';
import { comicApi } from '../../services/comicApi';
import { IBenchmark } from '../../types/benchmark';

import { Container } from '@material-ui/core';
import Details from './DetailsLayout';
import BreadCrumbs from 'src/components/BreadCrumbs';

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
    const { benchmark } = this.props;
    return (
      <Container>
        <Head>
          <title>{benchmark.name} | EYRA Benchmark Platform</title>
          <BreadCrumbs
            crumbs={[
              {
                id: 'benchmarks',
                name: 'Benchmarks',
              }, {
                id: `benchmarks/${benchmark.id}`,
                name: benchmark.name,
              },
            ]}
          />
        </Head>
        <Details data={benchmark} />
      </Container>
    );
  }
}
