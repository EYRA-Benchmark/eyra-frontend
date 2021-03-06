import React from 'react';
import { Button } from '@material-ui/core';
import { Field, Form, Formik } from 'formik';
import { FormikActions } from 'formik';
import { comicApi } from 'src/services/comicApi';
import styles from './AlgorithmSubmission.css';
import { IAlgorithm, IBenchmark, UUID4 } from 'src/types';
import { IUserProps, withUser } from 'src/context/User';
import HelpIcon from '@material-ui/icons/HelpOutlineRounded';
import VisualizationDialog from 'src/components/Dialog';

interface IProps {
  benchmark: IBenchmark;
}
interface IState {
  usersAlgorithms: IAlgorithm[];
  createNewAlgorithm: boolean;
  version: string;
  isSaved: boolean;
  showHelp: boolean;
}
interface IValues {
  algorithm: string;
  name: string;
  containerName: string;
}

class AlgorithmSubmission extends React.Component<IProps & IUserProps, IState> {
  state = {
    usersAlgorithms: [],
    createNewAlgorithm: true,
    version: '0',
    isSaved: false,
    showHelp: false,
  };
  async refresh() {
    const { user } = this.props;
    if (user != null) {
      const usersAlgorithms = await comicApi.algorithms({
        creator: user.id,
        submissions_benchmark_or_empty: this.props.benchmark.id,
      });
      this.setState({ usersAlgorithms });
    }
  }
  componentDidMount() {
    this.refresh();
  }
  validate = (values: any) => {
    let errors: any;
    errors = {
      name: '',
      containerName: '',
    };
    if (!values.name && !values.algorithm) {
      errors.name = 'Algorithm name is required';
    }
    if (!this.state.createNewAlgorithm && !values.algorithm) {
      errors.name = 'Please select an algorithm';
    }
    if (!values.containerName) {
      errors.containerName = 'container name is required';
    }
    if (!errors.name && !errors.version && !errors.containerName) {
      errors = {};
    }
    return errors;
  }
  onCheckChanged = (setFieldValue: any) => {
    this.setState({
      createNewAlgorithm: !this.state.createNewAlgorithm,
      version: '0',
    });
    setFieldValue('algorithm', '');
  }
  canSubmit = () => {
    return this.props.benchmark.permissions.indexOf('create_submission') > -1;
  }
  getNewAlgorithmForm = (errors: any, touched: any) => {
    return (
      <>
        <div className={styles.inputContainer}>
          <label htmlFor="name">Name</label>
          <Field
            name="name"
            type="text"
            placeholder="Algorithm Name"
          />
          <div className={styles.error}>
            {
              errors.name && touched.name && errors.name
            }
          </div>
        </div>
      </>
    );
  }
  onSubmit = async (
    values: IValues,
    { setSubmitting, resetForm }: FormikActions<IValues>,
  ) => {
    try {
      let algorithmID: UUID4 | null = null;
      let algorithmName = '';
      if (this.state.createNewAlgorithm) {
        const algorithm = await comicApi.algorithmSubmission({
          name: values.name,
          tags: [],
        });
        algorithmID = algorithm.id;
        algorithmName = values.name;
      } else {
        values.name = '';
        algorithmID = values.algorithm.split('/')[0];
        algorithmName = values.algorithm.split('/')[1];
      }
      const submission = await comicApi.submissionSubmission({
        algorithm: algorithmID,
        image: values.containerName,
        benchmark: this.props.benchmark.id,
        name: `${algorithmName} v${this.state.version}`,
        version: this.state.version,
      });
      if (submission) {
        this.setState({ isSaved: true });
      }
      resetForm();
      this.setState({
        version: '0',
      });

    } catch (e) {
      if (e.response.data.error) {
        alert('Error: ' + JSON.stringify(e.response.data.error));
      } else {
        alert('Error: ' + JSON.stringify(e.response.data));
      }
    }
    setSubmitting(false);
  }
  async getTheSubmissionVersion(algorithmId: string) {
    const submissions = await comicApi.submissions({ algorithm: algorithmId });
    let versionNumber = submissions[0].version && (parseInt(submissions[0].version, 10) + 1);
    if (!versionNumber) { versionNumber = 0; }
    const versionOfLastSubmission = versionNumber.toString();
    this.setState({
      version: versionOfLastSubmission,
    });
  }
  render() {
    const { usersAlgorithms, createNewAlgorithm, version, isSaved, showHelp } = this.state;
    const { benchmark } = this.props;
    const initialValues: IValues = {
      algorithm: '',
      name: '',
      containerName: '',
    };

    if (this.canSubmit()) {
      return (
        <Formik
          initialValues={initialValues}
          validate={this.validate}
          onSubmit={this.onSubmit}
        >
          {({ errors, touched, setFieldValue, handleSubmit, values }) => (
            <Form>
              <div className={styles.container}>
                {showHelp &&
                  <VisualizationDialog
                    title="How to create submission?"
                    print={false}
                    maxWidth={'sm'}
                    onClose={() => this.setState({ showHelp: false })}
                  >
                    <p>{benchmark.submission_instruction}</p>
                  </VisualizationDialog>}

                {!isSaved ?
                  <>
                    <div className={styles.inputContainer}>
                      <label htmlFor="algorithm">Algorithm</label>
                      <div className={styles.selectionContainer}>
                        {usersAlgorithms.length > 0 ? (
                          <>
                            <Field
                              component="select"
                              name="algorithm"
                              disabled={createNewAlgorithm}
                              onChange={(event: any) => {
                                this.getTheSubmissionVersion(event.target.value.split('/')[0]);
                                setFieldValue('algorithm', event.target.value);
                                this.setState({
                                  createNewAlgorithm: false,
                                });
                              }}
                            >
                              <option value="" label="Select an algorithm" />
                              {
                                usersAlgorithms.map((algorithm: IAlgorithm) => (
                                  <option
                                    key={algorithm.id + Math.random()}
                                    value={algorithm.id + '/' + algorithm.name}
                                    label={algorithm.name}
                                  />
                                ))
                              }
                            </Field>
                            <span>or</span>
                          </>
                        )
                          : null
                        }
                        <div className={styles.checkboxContainer}>
                          <Field
                            type="checkbox"
                            name="isNewAlgorithm"
                            checked={createNewAlgorithm}
                            onChange={() => this.onCheckChanged(setFieldValue)}
                          />
                          <label htmlFor={'newAlgorithm'}>
                            Create New Algorithm
                      </label>
                        </div>
                      </div>
                      <div className={styles.right} title="submission support">
                        <HelpIcon
                          color="primary"
                          onClick={() => this.setState({ showHelp: true })}
                        />
                      </div>
                      <div className={styles.error}>
                        {!createNewAlgorithm && errors.name && touched.name && errors.name}
                      </div>
                    </div>

                    {createNewAlgorithm && this.getNewAlgorithmForm(errors, touched)}
                    <div className={styles.inputContainer}>
                      <label htmlFor="version">Version</label>
                      <Field name="version" type="text" value={'v' + version} />
                      <div className={styles.error} />
                    </div>
                    <div className={styles.inputContainer}>
                      <label htmlFor="containerName">Docker image name</label>
                      <Field
                        name="containerName"
                        type="text"
                        placeholder="(e.g. eyra/algorithm-name:version-number)"
                      />
                      <div className={styles.error}>
                        {
                          errors.containerName && touched.containerName && errors.containerName
                        }
                      </div>
                    </div>
                    <div className={styles.inputContainer}>
                      <Button
                        variant="outlined"
                        color="primary"
                        type="submit"
                      >
                        Submit
                      </Button>
                    </div>
                  </>
                  :
                  <>
                    <p>Submission Successfull!</p>
                    <p><a href="/profile#submissions">Get the status of this submission</a></p>
                  </>
                }
              </div>
            </Form>
          )
          }
        </Formik >
      );
    }
    return (
      <div>
        <p>
          If you would like to create a submission for this benchmark,
          please login or sign up, by pressing "Login" at the top right.
        </p>
      </div >
    );
  }
}

export default withUser(AlgorithmSubmission);
