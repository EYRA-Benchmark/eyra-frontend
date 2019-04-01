import { comicApi } from '../../../services/comicApi';

import Button from "@material-ui/core/Button";
import { Field, Form, Formik } from "formik";
import { FormikActions } from "formik/dist/types";
import React from "react";
import CustomTextEditor from "../CustomTextEditor";
import styles from "./AlgorithmSubmission.module.css";

interface IProps {
  benchmarkId: string;
}
interface IValues {
  id: string;
  name: string;
  description: string;
  containerName: string;
}

const initialValues: IValues = {
  id: "",
  name: "",
  description: "",
  containerName: ""
};
const onSubmit = async (
  values: IValues,
  { setSubmitting }: FormikActions<IValues>
) => {
  // const formData = new FormData();
  // Object.keys(values).forEach(valueKey => {
  //   formData.append(valueKey, values[valueKey]);
  // });
  try {
    const algorithm = await comicApi.algorithmSubmission({
      benchmark: values.id,
      name: values.name,
      description: values.description,
      container: values.containerName
    });
    console.log(algorithm);
  } catch (e) {
    console.log(e);
  }
  setSubmitting(false);
};
class AlgorithmSubmission extends React.Component<IProps, {}> {
  render() {
    const { benchmarkId } = this.props;
    initialValues.id = benchmarkId;
    return (
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ isSubmitting, setFieldValue }) => (
          <Form>
            <div className={styles.container}>
              <div className={styles.inputContainer}>
                <label htmlFor="name">Name</label>
                <Field
                  name="name"
                  type="text"
                  placeholder="Submission Name"
                  autoFocus={true}
                />
              </div>
              <div className={styles.inputContainer}>
                <label htmlFor="description">Description</label>
                <CustomTextEditor
                  onChange={value => {
                    setFieldValue("description", value);
                  }}
                />
              </div>

              <div className={styles.inputContainer}>
                <label htmlFor="containerName">Container</label>
                <Field
                  name="containerName"
                  type="text"
                  placeholder="Container Name"
                />
                {/* <CustomFileUpload
                  onChange={value => setFieldValue("file", value)}
                /> */}
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
