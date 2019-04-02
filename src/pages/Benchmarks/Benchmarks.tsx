import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Spinner from '../../components/Utils/Spinner/Spinner';
import BenchmarksGrid from './CardGrid/CardGrid';
import { comicApi } from '../../services/comicApi';
import { IBenchmark } from '../../types/benchmark';
import { Typography } from '@material-ui/core';

interface IState {
  benchmarks: IBenchmark[] | null;
  selectedItem: any;
  loading: boolean;
}

class Benchmarks extends React.Component<RouteComponentProps<{}>, IState> {
  state = {
    benchmarks: null,
    selectedItem: null,
    loading: true
  };

  shouldComponentUpdate(nextProps: any, nextState: any) {
    return this.state.benchmarks !== nextState.benchmarks;
  }

  async componentDidMount() {
    this.setState({
      loading: false,
      benchmarks: await comicApi.benchmarks()
    });
  }

  public showDetails = (selectedItem: string) => {
    this.props.history.push({
      pathname: `benchmark/${selectedItem}`
    });
  };

  public render() {
    let content = null;
    if (this.state.loading) {
      content = <Spinner />;
    } else {
      content = (
        <BenchmarksGrid
          size={0}
          data={this.state.benchmarks}
          clicked={this.showDetails}
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
