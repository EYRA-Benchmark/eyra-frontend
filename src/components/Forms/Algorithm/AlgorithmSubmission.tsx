import { comicApi } from 'src/services/comicApi';

import { Button } from '@material-ui/core';
import { Field, Form, Formik } from 'formik';
import { FormikActions } from 'formik';
import React from 'react';
import styles from './AlgorithmSubmission.css';
import { IAlgorithm, IBenchmark, UUID4 } from 'src/types';
import { IUserProps, withUser } from 'src/context/User';

interface IProps {
  benchmark: IBenchmark;
}
interface IValues {
  algorithm: string;
  name: string;
  version: string;
  containerName: string;
}

interface IState {
  usersAlgorithms: IAlgorithm[];
  createNewAlgorithm: boolean;
}

const initialValues: IValues = {
  algorithm: '',
  name: '',
  version: '',
  containerName: ''
};

class AlgorithmSubmission extends React.Component<IProps & IUserProps, IState> {
  state = {
    usersAlgorithms: [],
    createNewAlgorithm: false
  };

  async refresh() {
    const { user } = this.props;
    if (user != null) {
      const usersAlgorithms = await comicApi.algorithms({ has_admin: user.id });
      this.setState({ usersAlgorithms });
    }
  }

  componentDidMount() {
    this.refresh();
  }

  componentWillReceiveProps() {
    this.refresh();
  }

  onCheckChanged = () => {
    this.setState({
      createNewAlgorithm: !this.state.createNewAlgorithm
    });
  };
  canSubmit = () => {
    return this.props.benchmark.permissions.indexOf('create_submission') > -1;
  };
  onSubmit = async (
    values: IValues,
    { setSubmitting }: FormikActions<IValues>
  ) => {
    try {
      let algorithmID: UUID4 | null = null;
      if (this.state.createNewAlgorithm) {
        const algorithm = await comicApi.algorithmSubmission({
          name: values.name
        });
        algorithmID = algorithm.id;
      } else {
        algorithmID = values.algorithm;
      }

      await comicApi.submissionSubmission({
        algorithm: algorithmID,
        image: values.containerName,
        benchmark: this.props.benchmark.id,
        name: `${values.name} on ${this.props.benchmark.name}`
      });
      alert('Submission succesful!');
    } catch (e) {
      alert('Error: ' + JSON.stringify(e));
    }
    setSubmitting(false);
  };

  render() {
    const { usersAlgorithms, createNewAlgorithm } = this.state;
    if (this.canSubmit()) {
      return (
        <Formik initialValues={initialValues} onSubmit={this.onSubmit}>
          {({ isSubmitting }) => (
            <Form>
              <div className={styles.container}>
                <div className={styles.inputContainer}>
                  <label htmlFor="algorithm">Algorithm</label>
                  {usersAlgorithms.length > 0 ? (
                    <div className={styles.selectionContainer}>
                      <Field
                        component="select"
                        name="algorithm"
                        disabled={createNewAlgorithm}
                      >
                        <option value="" label="Select an algorithm" />
                        {usersAlgorithms.map((algorithm: IAlgorithm) => (
                          <option
                            key={algorithm.id}
                            value={algorithm.id}
                            label={algorithm.name}
                          />
                        ))}
                      </Field>
                      <span>or</span>
                      <div className={styles.checkboxContainer}>
                        <input
                          name={'newAlgorithm'}
                          id={'newAlgorithm'}
                          type="checkbox"
                          value={'newAlgorithm'}
                          checked={createNewAlgorithm}
                          onChange={this.onCheckChanged}
                        />
                        <label htmlFor={'newAlgorithm'}>
                          Create New Algorithm
                        </label>
                      </div>
                    </div>
                  ) : (
                    <div className={styles.selectionContainer}>
                      <div className={styles.checkboxContainer}>
                        <input
                          name={'newAlgorithm'}
                          id={'newAlgorithm'}
                          type="checkbox"
                          value={'newAlgorithm'}
                          checked={createNewAlgorithm}
                          onChange={this.onCheckChanged}
                        />
                        <label htmlFor={'newAlgorithm'}>
                          Create New Algorithm
                        </label>
                      </div>
                    </div>
                  )}
                </div>
                <div className={styles.inputContainer}>
                  <label htmlFor="name">Name</label>
                  <Field
                    name="name"
                    type="text"
                    placeholder="(e.g. Amber v3)"
                  />
                </div>
                <div className={styles.inputContainer}>
                  <label htmlFor="version">Version</label>
                  <Field name="version" type="text" placeholder="(e.g. 3)" />
                </div>
                <div className={styles.inputContainer}>
                  <label htmlFor="containerName">Docker image name</label>
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
    return (
      <div>
        <p>You don't have permissions to submit</p>
      </div>
    );
  }
}

export default withUser(AlgorithmSubmission);
