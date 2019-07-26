import * as React from 'react';
import BenchmarkCardGrid from 'src/components/BenchmarkCardGrid';
import { comicApi } from 'src/services/comicApi';
import { IBenchmark } from 'src/types';
import { Typography, Container } from '@material-ui/core';

interface IProps {
  benchmarks: IBenchmark[];
}

class Benchmarks extends React.Component<IProps> {
  static async getInitialProps(): Promise<IProps> {
    return {
      benchmarks: await comicApi.benchmarks(),
    };
  }

  public render() {
    return (

      <Container>
        <Typography component="h1" variant="h5">
          Benchmarks
        </Typography>
        <BenchmarkCardGrid size={0} benchmarks={this.props.benchmarks} />
      </Container>
    );
  }
}
export default Benchmarks;
