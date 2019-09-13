import * as React from 'react';
import { Container } from '@material-ui/core';
import { comicApi } from 'src/services/comicApi';
import styles from 'src/pages/Home.css';
import { IBenchmark } from 'src/types/benchmark';
import BenchmarkForm from 'src/components/Forms/Benchmark/BenchmarkForm';
import Spinner from 'src/components/Spinner';
import { NextPageContext } from 'next';
interface IProps {
  benchmark: IBenchmark;
}

class EditBenchmark extends React.Component<IProps> {
  static async getInitialProps(ctx: NextPageContext): Promise<IProps> {
    return {
      benchmark: await comicApi.benchmark(ctx.query.id as string),
    };
  }

  render() {
    const { benchmark } = this.props;
    const content = benchmark ? (
      <BenchmarkForm benchmark={benchmark} />
    ) : (
        <Spinner />
      );
    return (
      <Container>
        <h3 className={styles.sectionHeader}>Edit Benchmark</h3>
        {content}
      </Container>
    );
  }
}
export default EditBenchmark;
