import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { Typography } from "@material-ui/core";
import { comicApi } from "src/services/comicApi";

import { IBenchmark } from "src/types/benchmark";
import BenchmarkForm from "src/components/Forms/Benchmark/BenchmarkForm";
import Spinner from "src/components/Spinner";

interface IState {
  benchmark: IBenchmark | null;
}

class EditBenchmark extends React.Component<
  RouteComponentProps<{ id: string }>,
  IState
> {
  state = {
    benchmark: null,
  };
  async componentDidMount() {
    this.setState({
      benchmark: await comicApi.benchmark(this.props.match.params.id),
    });
  }
  render() {
    const { benchmark } = this.state;
    const content = benchmark ? (
      <BenchmarkForm benchmark={benchmark} />
    ) : (
      <Spinner />
    );
    return (
      <div>
        <Typography component="h1" variant="h5" style={{ margin: "20px 10px" }}>
          Edit Benchmark
        </Typography>
        {content}
      </div>
    );
  }
}
export default withRouter(EditBenchmark);
