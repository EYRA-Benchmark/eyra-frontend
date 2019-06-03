import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router";
// import { Typography } from "@material-ui/core";
import { comicApi } from "src/services/comicApi";
import styles from "src/pages/Home/Home.module.css";
import { IDataset } from "src/types/dataset";
import DatasetForm from "src/components/Forms/Dataset/DatasetForm";
import Spinner from "src/components/Spinner";

interface IState {
  dataset: IDataset | null;
}

class EditDataset extends React.Component<
  RouteComponentProps<{ id: string }>,
  IState
> {
  state = {
    dataset: null,
  };
  async componentDidMount() {
    this.setState({
      dataset: await comicApi.dataset(this.props.match.params.id),
    });
  }
  render() {
    const { dataset } = this.state;
    const content = dataset ? (
      <DatasetForm dataset={dataset} />
    ) : (
      <Spinner />
    );
    return (
      <div>
        <h3 className={styles.sectionHeader}>Edit Dataset</h3>
        {content}
      </div>
    );
  }
}
export default withRouter(EditDataset);