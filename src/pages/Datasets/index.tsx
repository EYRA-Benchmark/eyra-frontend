import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import Spinner from "src/components/Spinner/index";
import DatasetCardGrid from "src/components/DatasetCardGrid";
import { comicApi } from "src/services/comicApi";
import { IDataset } from "src/types";
import { Typography } from "@material-ui/core";

interface IState {
  datasets: IDataset[] | null;
}

class Datasets extends React.Component<RouteComponentProps<{}>, IState> {
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
      <div>
        <Typography component="h1" variant="h5">
          Datasets
        </Typography>
        {this.getContent()}
      </div>
    );
  }
}
export default Datasets;