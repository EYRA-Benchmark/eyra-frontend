import * as React from 'react';
import { comicApi } from 'src/services/comicApi';
import { IBenchmark } from 'src/types';

import Head from 'next/head';
import { Typography, Container } from '@material-ui/core';
import BenchmarkCardGrid from 'src/components/BenchmarkCardGrid';
// import BreadCrumbs from 'src/components/BreadCrumbs';
import { withUser, IUserProps } from 'src/context/User';

interface IProps {
  benchmarks: IBenchmark[];
}

interface IState {
  benchmarks: IBenchmark[];
}

class Benchmarks extends React.Component<IUserProps & IProps, IState> {
  async refresh() {
    this.setState({
      benchmarks: await comicApi.benchmarks(),
    });
  }

  componentWillMount() {
    this.setState({ benchmarks: this.props.benchmarks });
  }

  componentWillReceiveProps(
    nextProps: Readonly<IProps>,
    nextContext: any,
  ): void {
    this.refresh();
  }

  static async getInitialProps(): Promise<IProps> {
    return {
      benchmarks: await comicApi.benchmarks(),
    };
  }

  public render() {
    return (
      <Container>
        <Head>
          <title>Benchmarks | EYRA Benchmark Platform</title>
          {/* <BreadCrumbs
            crumbs={[
              {
                id: 'benchmarks',
                name: 'Benchmarks',
              },
            ]}
          /> */}
        </Head>
        <Typography component="h1" variant="h5">
          Benchmarks
        </Typography>
        <BenchmarkCardGrid size={0} benchmarks={this.state.benchmarks} />
      </Container>
    );
  }
}
export default withUser(Benchmarks);
