import * as React from 'react';

import Spinner from '../../components/Spinner';
import DatasetCardGrid from '../../components/DatasetCardGrid';
import { comicApi } from '../../services/comicApi';
import { IDataset } from '../../types';
import { Typography, Container } from '@material-ui/core';

interface IState {
  datasets: IDataset[] | null;
}

class Datasets extends React.Component<{}, IState> {
  state = {
    datasets: null,
  };

  shouldComponentUpdate(nextProps: any, nextState: any) {
    return this.state.datasets !== nextState.datasets;
  }

  async componentDidMount() {
    this.setState({
      datasets: await comicApi.datasets(),
    });
  }

  private getContent() {
    if (this.state.datasets === null) {
      return <Spinner />;
    } else {
      return <DatasetCardGrid size={0} datasets={this.state.datasets!} />;
    }
  }

  public render() {
    return (
      <Container>
        <Typography component="h1" variant="h5">
          Datasets
        </Typography>
        {this.getContent()}
      </Container>
    );
  }
}
export default Datasets;
