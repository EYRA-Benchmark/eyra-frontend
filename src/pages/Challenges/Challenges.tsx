import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import AnimateComponent from '../../components/Animation/AnimateComponent';
import Spinner from '../../components/Utils/Spinner/Spinner';
import ChallengesGrid from './CardGrid/CardGrid';
import { comicApi } from '../../services/comicApi';
import { IBenchmark } from '../../types/benchmark';

interface IState {
  challengesData: IBenchmark[] | null;
  selectedItem: any;
  loading: boolean;
}

class Challenges extends React.Component<RouteComponentProps<{}>, IState> {
  state = {
    challengesData: null,
    selectedItem: null,
    loading: true
  };

  shouldComponentUpdate(nextProps: any, nextState: any) {
    return this.state.challengesData !== nextState.challengesData;
  }

  async componentDidMount() {
    this.setState({
      loading: false,
      challengesData: await comicApi.benchmarks(),
    });
  }

  public showDetails = (selectedItem: string) => {
    this.props.history.push({
      pathname: 'benchmark_details',
      state: { selectedItem }
    });
  };

  public render() {
    let content = null;
    if (this.state.loading) {
      content = <Spinner />;
    } else {
      content = (
        <ChallengesGrid
          size={0}
          data={this.state.challengesData}
          clicked={this.showDetails}
        />
      );
    }
    return content;
  }
}
export default AnimateComponent(Challenges);
