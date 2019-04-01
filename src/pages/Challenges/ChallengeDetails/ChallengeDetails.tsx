import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router";

import { comicApi } from "../../../services/comicApi";

import { IBenchmark } from "../../../types/benchmark";

import Spinner from "../../../components/Utils/Spinner/Spinner";
import Details from "./DetailsLayout/DetailsLayout";

interface IState {
  benchmark: IBenchmark | null;
}

class ChallengeDetails extends React.Component<
  RouteComponentProps<{ id: string }>,
  IState
> {
  state = {
    benchmark: null
  };
  async componentDidMount() {
    // await new Promise(resolve => setTimeout(resolve, 2000));
    this.setState({
      benchmark: await comicApi.benchmark(this.props.match.params.id)
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
export default withRouter(ChallengeDetails);
