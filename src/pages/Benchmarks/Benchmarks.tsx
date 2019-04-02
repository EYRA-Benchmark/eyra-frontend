import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import Spinner from "src/components/Utils/Spinner/Spinner";
import BenchmarksGrid from "./CardGrid/CardGrid";
import { comicApi } from "src/services/comicApi";
import { IBenchmark } from "src/types";
import { Typography } from "@material-ui/core";

interface IState {
  benchmarks: IBenchmark[] | null;
  loading: boolean;
}

class Benchmarks extends React.Component<RouteComponentProps<{}>, IState> {
  state = {
    benchmarks: null,
    loading: true,
  };

  shouldComponentUpdate(nextProps: any, nextState: any) {
    return this.state.benchmarks !== nextState.benchmarks;
  }

  async componentDidMount() {
    this.setState({
      loading: false,
      benchmarks: await comicApi.benchmarks(),
    });
  }

  private getContent() {
    if (this.state.loading) {
      return <Spinner />;
    } else {
      return (
        <BenchmarksGrid
          size={0}
          data={this.state.benchmarks}
        />
      );
    }
  }

  public render() {
    return (
      <div>
        <Typography component="h1" variant="h5">
          Benchmarks
        </Typography>
        {this.getContent()}
      </div>
    );
  }
}
export default Benchmarks;
