import * as React from 'react';

import { Grid } from '@material-ui/core';
import { IBenchmark } from 'src/types';

import { BenchmarkCard } from 'src/components/BenchmarkCard';

interface IProps {
  size: number;
  benchmarks: IBenchmark[];
}

const sortByDate = (a: IBenchmark, b: IBenchmark) =>
  new Date(a.modified).getTime() - new Date(b.modified).getTime();

export class CardGrid extends React.Component<IProps, {}> {
  render() {
    const { size, benchmarks } = this.props;

    const filteredBenchmarks = benchmarks
      .sort(sortByDate)
      .slice(0, size > 0 ? size : benchmarks.length);

    return (
      <Grid container={true} spacing={3}>
        {filteredBenchmarks.map((benchmark, index: number) => (
          <Grid item={true} key={index} xs={12} sm={4} md={4}>
            <BenchmarkCard benchmark={benchmark}/>
          </Grid>
        ))}
      </Grid>
    );
  }
}
export default CardGrid;
