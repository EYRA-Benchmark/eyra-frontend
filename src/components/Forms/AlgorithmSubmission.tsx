import Button from "@material-ui/core/Button";

import { Field, Form, Formik } from "formik";
import { FormikActions } from "formik/dist/types";
import React from "react";
import axios from "../../services/SetUpAxios";
import styles from "./AlgorithmSubmission.module.css";
import CustomTextEditor from "./CustomTextEditor";

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
  const postData = {
    benchmark: values.id,
    name: values.name,
    description: values.description,
    container: values.containerName
  };

  await axios
    .post("algorithmSubmission/", postData)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
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
