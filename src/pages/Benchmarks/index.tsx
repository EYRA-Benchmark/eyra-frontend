import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import Spinner from "src/components/Spinner/index";
import BenchmarkCardGrid from "src/components/BenchmarkCardGrid";
import { comicApi } from "src/services/comicApi";
import { IBenchmark } from "src/types";
import { Typography } from "@material-ui/core";

interface IState {
  benchmarks: IBenchmark[] | null;
}

class Benchmarks extends React.Component<RouteComponentProps<{}>, IState> {
  state = {
    benchmarks: null,
  };

  shouldComponentUpdate(nextProps: any, nextState: any) {
    return this.state.benchmarks !== nextState.benchmarks;
  }

  async componentDidMount() {
    this.setState({
      benchmarks: await comicApi.benchmarks(),
    });
  }

  private getContent() {
    if (this.state.benchmarks === null) {
      return <Spinner />;
    } else {
      return (
        <BenchmarkCardGrid
          size={0}
          benchmarks={this.state.benchmarks!}
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
