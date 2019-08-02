import { comicApi } from 'src/services/comicApi';

import { Button, Fab, Checkbox } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { Field, Form, Formik } from 'formik';
import { FormikActions } from 'formik';
import React from 'react';
// import CustomTextEditor from '../CustomTextEditor';
import styles from './AlgorithmSubmission.css';
import { IAlgorithm, IUser, UUID4 } from 'src/types';
import { IUserProps, withUser } from 'src/context/User';

interface IProps {
  benchmarkId: string;
  algorithms: IAlgorithm[];
  inteface: UUID4;
}
interface IValues {
  algorithmName: string;
  implementationName: string;
  version: string;
  containerName: string;

}
interface IState {
  usersAlgorithms: IAlgorithm[],
  createNewAlgorithm: boolean;
}
const initialValues: IValues = {
  algorithmName: '',
  implementationName: '',
  version: '',
  containerName: '',
};

class AlgorithmSubmission extends React.Component<IProps & IUserProps, IState> {
  state = {
    usersAlgorithms: [],
    createNewAlgorithm: false,
  };
  componentDidMount() {
    const { algorithms, user } = this.props;
    if (user != null) {
      const usersAlgorithms = algorithms.filter((algorithm: IAlgorithm) => algorithm.creator === 2);
      this.setState({ usersAlgorithms });
    }
  }
  onCheckChanged = () => {
    this.setState({
      createNewAlgorithm: !this.state.createNewAlgorithm,
    });
  }

  onSubmit = async (
    values: IValues,
    { setSubmitting }: FormikActions<IValues>,
  ) => {
    try {
      const algorithm = await comicApi.algorithmSubmission({
        benchmark: this.props.benchmarkId,
        algorithm_name: values.algorithmName,
        implementation_name: values.implementationName,
        version: values.version,
        container_name: values.containerName,
      });
      console.log(algorithm);
      alert('Submission successful!');
    } catch (e) {
      console.log(e);
    }
    setSubmitting(false);
  }
  render() {
    const { usersAlgorithms, createNewAlgorithm } = this.state;

    return (
      <Formik initialValues={initialValues} onSubmit={this.onSubmit}>
        {({ isSubmitting, setFieldValue, values }) => (
          <Form>
            <div className={styles.container}>
              <div className={styles.inputContainer}>
                <label htmlFor="algorithName">Algorithm</label>
                {/* <Field
                  name="algorithmName"
                  type="text"
                  placeholder="(e.g. Amber)"
                  autoFocus={true}
                /> */}

                {usersAlgorithms.length > 0 ?
                  (
                    <div className={styles.selectionContainer}>
                      <select
                        name="Algorithm"
                        onChange={(value) => setFieldValue('algorithmName', value)}
                        disabled={createNewAlgorithm}
                      >
                        <option value="" label="Select an algorithm" />
                        {
                          usersAlgorithms.map((algorithm: IAlgorithm) =>
                            <option key={algorithm.id} value={algorithm.id} label={algorithm.name} />)
                        }
                      </select>
                      <div className={styles.checkboxContainer}>
                        <input
                          name={'newAlgorithm'}
                          id={'newAlgorithm'}
                          type="checkbox"
                          value={'newAlgorithm'}
                          checked={createNewAlgorithm}
                          onChange={this.onCheckChanged}
                        />
                        <label htmlFor={'newAlgorithm'}>Create New Algorithm</label>
                      </div>
                    </div>
                  )
                  : (
                    <div className={styles.selectionContainer}>
                      <span>You don't have any algorithms created.Want to create new one?
                      <Fab color="secondary" aria-label="Add" size="small" title={'New Algorithm'}>
                          <AddIcon color="primary" />
                        </Fab></span>
                    </div>
                  )
                }
              </div>
              <div className={styles.inputContainer}>
                <label htmlFor="implementationName">Implementation Name</label>
                <Field
                  name="implementationName"
                  type="text"
                  placeholder="(e.g. Amber v3)"
                />
              </div>
              <div className={styles.inputContainer}>
                <label htmlFor="version">Version</label>
                <Field
                  name="version"
                  type="text"
                  placeholder="(e.g. 3)"
                />
              </div>
              {/*<div className={styles.inputContainer}>
                <label htmlFor="description">Description</label>
                <CustomTextEditor
                  defaultValue={defaultValue}
                  defaultFormat="html"
                  showEditor={true}
                  onChange={(value) => {
                    setFieldValue('description', value);
                />
              </div>*/}

              <div className={styles.inputContainer}>
                <label htmlFor="containerName">Docker container name</label>
                <Field
                  name="containerName"
                  type="text"
                  placeholder="(e.g. eyra/amber:3)"
                />
              </div>
              <div className={styles.inputContainer}>
                <Button
                  variant="outlined"
                  color="primary"
                  disabled={isSubmitting}
                  type="submit"
                >
                  Submit
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    );
  }
}

export default withUser(AlgorithmSubmission);
