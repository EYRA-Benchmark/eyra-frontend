import Button from "@material-ui/core/Button";
import Axios from "axios";
import { Field, Form, Formik } from "formik";
import { FormikActions } from "formik/dist/types";
import React from "react";
import styles from "./AlgorithmSubmission.module.css";
import CustomFileUpload from "./CustomFileUpload";
import CustomTextEditor from "./CustomTextEditor";
interface IValues {
  name: string;
  description: string;
  file: File | null;
}

const initialValues: IValues = {
  name: "",
  description: "",
  file: null
};
const onSubmit = async (
  values: IValues,
  { setSubmitting }: FormikActions<IValues>
) => {
  const formData = new FormData();
  Object.keys(values).forEach(valueKey => {
    formData.append(valueKey, values[valueKey]);
  });
  Axios.post("/algorithmSubmission", formData);
  setSubmitting(false);
};
class AlgorithmSubmission extends React.Component<{}, {}> {
  render() {
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
                  onChange={value => setFieldValue("description", value)}
                />
              </div>

              <div className={styles.inputContainer}>
                <label htmlFor="container">Container</label>
                <CustomFileUpload
                  onChange={value => setFieldValue("file", value)}
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
