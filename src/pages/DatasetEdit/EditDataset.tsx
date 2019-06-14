import * as React from 'react';
// import { Typography } from "@material-ui/core";
// import { comicApi } from '../../services/comicApi';
import styles from '../Home/Home.css';
import { IDataset } from '../../types/dataset';
import DatasetForm from '../../components/Forms/Dataset/DatasetForm';
import Spinner from '../../components/Spinner';

interface IState {
  dataset: IDataset | null;
}

class EditDataset extends React.Component<{}, IState> {
  state = {
    dataset: null,
  };
  async componentDidMount() {
    this.setState({
      // dataset: await comicApi.dataset(this.props.match.params.id),
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
export default EditDataset;
