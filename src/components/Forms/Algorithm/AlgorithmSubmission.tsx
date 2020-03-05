import React from 'react';
import * as yup from 'yup';
import { Button } from '@material-ui/core';
import { Field, Form, Formik } from 'formik';
import { FormikActions } from 'formik';
import { comicApi } from 'src/services/comicApi';
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
const formSchema = yup.object().shape({
  name: yup
    .string()
    .required(' * Algorithm name is required.'),
  version: yup
    .string()
    .required(' * Version is required'),
  containerName: yup.string().required(' * Docker image is required')
});
const initialValues: IValues = {
  algorithm: '',
  name: '',
  version: '',
  containerName: '',
};

class AlgorithmSubmission extends React.Component<IProps & IUserProps, IState> {
  state = {
    usersAlgorithms: [],
    createNewAlgorithm: true,
    isValidated: false
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
  onCheckChanged = (setFieldValue: any) => {
    this.setState({
      createNewAlgorithm: !this.state.createNewAlgorithm,
    });
    setFieldValue('algorithm', '')
  }
  canSubmit = () => {
    debugger;
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
            placeholder="(e.g. Amber v3)"
          />
          <div className={styles.error}>
            {
              errors.name && touched.name && errors.name
            }
          </div>
        </div>
      </>
    )
  }
  onSubmit = async (
    values: IValues,
    { setSubmitting }: FormikActions<IValues>,
  ) => {
    try {
      let algorithmID: UUID4 | null = null;
      if (this.state.createNewAlgorithm) {
        const algorithm = await comicApi.algorithmSubmission({
          name: values.name,
          tags: [],
        });
        algorithmID = algorithm.id;
      } else {
        algorithmID = values.algorithm;
      }

      await comicApi.submissionSubmission({
        algorithm: algorithmID,
        image: values.containerName,
        benchmark: this.props.benchmark.id,
        name: `${values.name} on ${this.props.benchmark.name}`,
        version: values.version
      });
      alert('Submission succesful!');
    } catch (e) {
      alert('Error: ' + JSON.stringify(e.response.data.error));
    }
    setSubmitting(false);
  }

  render() {
    const { usersAlgorithms, createNewAlgorithm } = this.state;

    if (this.canSubmit()) {
      return (
        <Formik
          initialValues={initialValues}
          validationSchema={formSchema}
          onSubmit={this.onSubmit}
        >
          {({ isSubmitting, errors, touched, setFieldValue, handleSubmit }) => (
            <Form>
              <div className={styles.container}>
                <div className={styles.inputContainer}>
                  <label htmlFor="algorithm">Algorithm</label>
                  <div className={styles.selectionContainer}>
                    {usersAlgorithms.length > 0 ? (
                      <>
                        <Field
                          component="select"
                          name="name"
                          disabled={createNewAlgorithm}
                          onChange={(event: any) => {
                            setFieldValue('algorithm', event.target.value)
                            this.setState({
                              createNewAlgorithm: false,
                            })
                          }}
                        >
                          <option value="" label="Select an algorithm" />
                          {
                            usersAlgorithms.map((algorithm: IAlgorithm) => (
                              <option
                                key={algorithm.id + Math.random()}
                                value={algorithm.id}
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
                      <input
                        name={'newAlgorithm'}
                        id={'newAlgorithm'}
                        type="checkbox"
                        value={'newAlgorithm'}
                        checked={createNewAlgorithm}
                        onChange={() => this.onCheckChanged(setFieldValue)}
                      />
                      <label htmlFor={'newAlgorithm'}>
                        Create New Algorithm
                        </label>
                    </div>
                  </div>
                  <div className={styles.error}>
                    {!createNewAlgorithm && errors.name && touched.name && errors.name}
                  </div>
                </div>

                {createNewAlgorithm && this.getNewAlgorithmForm(errors, touched)}
                <div className={styles.inputContainer}>
                  <label htmlFor="version">Version</label>
                  <Field name="version" type="text" placeholder="(e.g. 3)" />
                  <div className={styles.error}>
                    {
                      errors.version && touched.version && errors.version
                    }
                  </div>
                </div>
                <div className={styles.inputContainer}>
                  <label htmlFor="containerName">Docker image name</label>
                  <Field
                    name="containerName"
                    type="text"
                    placeholder="(e.g. eyra/amber:3)"
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
                    disabled={isSubmitting}
                    type="submit"
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </Form>
          )
          }
        </Formik >
      );
    }
    return (
      <div>
        <p>You don't have permissions to submit</p>
      </div >
    );
  }
}

export default withUser(AlgorithmSubmission);
