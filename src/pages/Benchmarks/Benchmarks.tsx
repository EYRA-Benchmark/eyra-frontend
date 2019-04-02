import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import Spinner from "src/components/Utils/Spinner/Spinner";
import BenchmarksGrid from "./CardGrid/CardGrid";
import { comicApi } from "src/services/comicApi";
import { IBenchmark } from "src/types";
import { Typography } from "@material-ui/core";

interface IState {
  benchmarks: IBenchmark[] | null;
  selectedItem: any;
  loading: boolean;
}

class Benchmarks extends React.Component<RouteComponentProps<{}>, IState> {
  state = {
    benchmarks: null,
    selectedItem: null,
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

  public render() {
    let content = null;
    if (this.state.loading) {
      content = <Spinner />;
    } else {
      content = (
        <BenchmarksGrid
          size={0}
          data={this.state.benchmarks}
        />
      );
    }
    return (
      <div>
        <Typography component="h1" variant="h5">
          Benchmarks
          {content}
        </Typography>
      </div>
    );
  }
}
export default Benchmarks;
