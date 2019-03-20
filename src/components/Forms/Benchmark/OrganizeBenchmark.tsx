import Button from "@material-ui/core/Button";
import { Field, Form, Formik } from "formik";
import { FormikActions } from "formik/dist/types";
import React from "react";

import styles from "../Algorithm/AlgorithmSubmission.module.css";
import CustomTextEditor from "../CustomTextEditor";

interface IValues {
  name: string;
  short_description: string;
  overview: string;
}

const initialValues: IValues = {
  name: "",
  short_description: "",
  overview: ""
};
const onSubmit = async (
  values: IValues,
  { setSubmitting }: FormikActions<IValues>
) => {
  const postData = {
    name: values.name,
    short_description: values.short_description,
    overview: values.overview
  };
  console.log(postData);
  setSubmitting(false);
};
class OrganizeBenchmark extends React.Component<{}, {}> {
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

export default OrganizeBenchmark;
