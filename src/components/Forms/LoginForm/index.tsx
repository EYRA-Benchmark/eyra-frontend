import React from 'react';
import * as yup from 'yup';
import { Formik, Form, Field, FormikActions } from 'formik';
import { Button } from '@material-ui/core';

import { withUser, IUserProps } from 'src/context/User';
import styles from './LoginForm.css';

const formSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required('Email is required.'),
  password: yup
    .string()
    .required('Password is required'),
});

interface IValues {
  email: string;
  password: string;
}

const initialValues: IValues = {
  email: '',
  password: '',
};

const Index = (props: IUserProps) => {
  const handleSubmit = async (values: IValues, formik: FormikActions<IValues>) => {
    try {
      await props.login(values);
    } catch (e) {
      formik.setStatus({ loginFail: e.message});
    }
    formik.setSubmitting(false);
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={formSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, setFieldValue, errors, status, touched, isValid, values }) => (
          <Form>
            <div className={styles.container}>
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
                Login
              </Button>
              { status && status.loginFail && (
                <div className={styles.error}>{status.loginFail}</div>
              )}
            </div>
          </Form>
        )}
      </Formik>
      <div className={styles.googleLogin}>
        <a onClick={props.oauthLogin}>
          <img src="/static/images/btn_google_signin_dark_normal_web.png" alt="Sign in with google" />
        </a>
      </div>
    </>
  );
};

export default withUser(Index);
