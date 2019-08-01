import * as React from 'react';
import { Container } from '@material-ui/core';
import { comicApi } from '../../services/comicApi';
import styles from '../Home/Home.css';
import { IBenchmark } from '../../types/benchmark';
import BenchmarkForm from '../../components/Forms/Benchmark/BenchmarkForm';
import Spinner from '../../components/Spinner';
import { NextContext } from 'next';
interface IProps {
  benchmark: IBenchmark;
}

class EditBenchmark extends React.Component<IProps> {
  static async getInitialProps(ctx: NextContext<{ id: string }>): Promise<IProps> {
    return {
      benchmark: await comicApi.benchmark(ctx.query.id),
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
