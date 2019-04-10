import React from "react";
import styles from "./SignUp.module.css";
import * as yup from "yup";
import { Formik, Form, Field } from "formik";
import { Button } from "@material-ui/core";

const formSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required("No email provided."),
  password: yup
    .string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum."),
});
interface IValues {
  email: string;
  password: string;
}

const initialValues: IValues = {
  email: "",
  password: "",
};
const Signup = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={formSchema}
      onSubmit={() => {
        console.log();
      }}
    >
      {({ isSubmitting, setFieldValue, errors, touched, isValid }) => (
        <Form>
          <div className={styles.container}>
            <Field
              name="name"
              type="input"
              placeholder="Name"
              autoFocus={true}
              className={styles.input}
            />
            <Field
              name="organization"
              type="input"
              placeholder="Organization"
              className={styles.input}
            />
            <Field
              name="email"
              type="email"
              placeholder="Email"
              className={styles.input}
            />
            {errors.email && touched.email && (
              <div className={styles.error}>{errors.email}</div>
            )}
            <Field
              name="password"
              type="password"
              placeholder="Password"
              className={styles.input}
            />
            {errors.password && touched.password && (
              <div className={styles.error}>{errors.password}</div>
            )}

            <Button
              variant="outlined"
              color="primary"
              disabled={!isValid || isSubmitting}
              type="submit"
            >
              Sign Up
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Signup;
