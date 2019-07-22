import React from 'react';
import styles from './SignUp.css';
import * as yup from 'yup';
import { Formik, Form, Field, FormikActions } from 'formik';
import { Button } from '@material-ui/core';
import { IUserProps, withUser } from 'src/context/User';

const formSchema = yup.object().shape({
  firstName: yup
    .string()
    .required('First Name is required.'),
  lastName: yup
    .string()
    .required('Last Name is required.'),
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
}

const initialValues: IValues = {
  firstName: '',
  lastName: '',
  organization: '',
  email: '',
  password: '',
};

const Signup = (props: IUserProps) => {
  const handleSubmit = async (values: IValues, formik: FormikActions<IValues>) => {
    try {
      await props.signup({
        first_name: values.firstName,
        last_name: values.lastName,
        email: values.email,
        password: values.password,
      });
      formik.setStatus({ success: true });
    } catch (e) {
      formik.setStatus({ signupFail: e.message});
    }
    formik.setSubmitting(false);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={formSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, setFieldValue, errors, status, touched, isValid, values }) => (
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
            <Button
              variant="outlined"
              color="primary"
              disabled={!isValid || isSubmitting || (status && status.success)}
              type="submit"
            >
              Sign Up
            </Button>
            { status && status.success && (
              <div>Thanks for signing up!</div>
            )}
            { status && status.signupFail && (
              <div className={styles.error}>{status.signupFail}</div>
            )}
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default withUser(Signup);
