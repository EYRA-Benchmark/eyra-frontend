import React from 'react';
import styles from './SignUp.module.css';
import * as yup from 'yup';
import { Formik, Form, Field, FormikActions } from 'formik';
import { Button, Dialog, DialogContent } from '@material-ui/core';
import { comicApi } from 'src/services/comicApi';
const formSchema = yup.object().shape({
  firstName: yup.string().required('First Name is required.'),
  lastName: yup.string().required('Last Name is required.'),
  email: yup
    .string()
    .email()
    .required('Email is required.'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password is too short - should be 8 chars minimum.'),
});
interface IValues {
  firstName: string;
  lastName: string;
  organization: string;
  email: string;
  password: string;
  response: string;
}

const initialValues: IValues = {
  firstName: '',
  lastName: '',
  organization: '',
  email: '',
  password: '',
  response: '',
};
const onSubmit = async (
  values: IValues,
  { setSubmitting }: FormikActions<IValues>,
) => {
  try {
    await comicApi
      .registration({
        first_name: values.firstName,
        last_name: values.lastName,
        email: values.email,
        password: values.password,
      })

      .then((response) => {
        if (response) {
          values.response = 'Thank You for Registering!';
        }
      })
      .catch((error) => {
        values.response = `${error.response.data.error}`;
        console.log(error.response);
      });
  } catch (e) {
    console.log(e);
  }
  setSubmitting(false);
};
const Signup = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={formSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, setFieldValue, errors, touched, isValid, values }) => (
        <Form>
          <div className={styles.container}>
            <Field
              name="firstName"
              type="input"
              placeholder="First Name"
              autoFocus={true}
              className={styles.input}
            />
            {errors.firstName && touched.lastName && (
              <div className={styles.error}>{errors.firstName}</div>
            )}
            <Field
              name="lastName"
              type="input"
              placeholder="Last Name"
              className={styles.input}
            />
            {errors.lastName && touched.lastName && (
              <div className={styles.error}>{errors.lastName}</div>
            )}
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
            <Dialog
              open={values.response.length > 0}
              onClose={() => {
                setFieldValue('response', '');
              }}
            >
              <DialogContent>{values.response}</DialogContent>
            </Dialog>
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
