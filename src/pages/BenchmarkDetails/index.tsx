import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router";

import { comicApi } from "src/services/comicApi";

import { IBenchmark } from "src/types/benchmark";

import Spinner from "src/components/Spinner/index";
import Details from "./DetailsLayout/";

interface IState {
  benchmark: IBenchmark | null;
}

class BenchmarkDetails extends React.Component<
  RouteComponentProps<{ id: string }>,
  IState
> {
  state = {
    benchmark: null,
  };
  async componentDidMount() {
    // await new Promise(resolve => setTimeout(resolve, 2000));
    this.setState({
      benchmark: await comicApi.benchmark(this.props.match.params.id),
    });
  }
  render() {
    const content = this.state.benchmark ? (
      <Details data={this.state.benchmark!} />
    ) : (
      <Spinner />
    );
    return <div>{content}</div>;
  }
}
export default withRouter(BenchmarkDetails);
