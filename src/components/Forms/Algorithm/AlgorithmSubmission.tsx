import { comicApi } from 'src/services/comicApi';

import { Button } from '@material-ui/core';
import { Field, Form, Formik } from 'formik';
import { FormikActions } from 'formik';
import React from 'react';
//import CustomTextEditor from '../CustomTextEditor';
import styles from './AlgorithmSubmission.module.css';

interface IProps {
  benchmarkId: string;
}
interface IValues {
  algorithmName: string;
  implementationName: string;
  version: string;
  containerName: string;
}

const initialValues: IValues = {
  algorithmName: '',
  implementationName: '',
  version: '',
  containerName: '',
};

class AlgorithmSubmission extends React.Component<IProps, {}> {
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
    return (
      <Formik initialValues={initialValues} onSubmit={this.onSubmit}>
        {({ isSubmitting }) => (
          <Form>
            <div className={styles.container}>
              <div className={styles.inputContainer}>
                <label htmlFor="algorithName">Algorithm name</label>
                <Field
                  name="algorithmName"
                  type="text"
                  placeholder="(e.g. Amber)"
                  autoFocus={true}
                />
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

export default AlgorithmSubmission;
