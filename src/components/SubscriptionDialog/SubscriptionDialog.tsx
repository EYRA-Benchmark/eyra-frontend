import React from 'react';

import classNames from 'classnames';
import { Formik, FormikActions, FieldArray } from 'formik';
import * as yup from 'yup';

import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle
} from '@material-ui/core';

import styles from './SubscriptionDialog.module.css';

import MailImage from 'src/assets/images/mail.png';
import { submitContactForm } from 'src/services/contactFormSubmission';

const formSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required(),
  name: yup.string(),
  organization: yup.string(),
  permission: yup
    .bool()
    .test(
      'permission',
      'You have to agree with our Terms and Conditions!',
      value => value === true
    )
    .required('You have to agree with our Terms and Conditions!')
});
const interests = [
  'Setting up a benchmark',
  'Submitting an algorithm',
  'Stay up-to-date about EYRA platform'
];
interface IValues {
  email: string;
  name: string;
  organization: string;
  intrests: string[];
  permission: boolean;
  isSuccess: boolean;
  isError: boolean;
}

const initialValues: IValues = {
  email: '',
  name: '',
  organization: '',
  intrests: interests,
  permission: false,
  isSuccess: false,
  isError: false
};

const onSubmit = async (
  values: IValues,
  { setSubmitting }: FormikActions<IValues>
) => {
  const isSuccess = await submitContactForm(
    values.name,
    values.organization,
    values.email,
    values.intrests
  );
  values.isSuccess = isSuccess;
  if (!isSuccess) {
    values.isError = true;
  }
  setSubmitting(isSuccess);
};

const SubscriptionDialog: React.FunctionComponent = () => (
  <Formik
    initialValues={initialValues}
    validationSchema={formSchema}
    onSubmit={onSubmit}
  >
    {({
      handleSubmit,
      handleChange,
      handleBlur,
      values,
      isValid,
      errors,
      touched,
      setFieldValue,
      isSubmitting
    }) => (
      <React.Fragment>
        <DialogTitle>Subscribe to stay up to date</DialogTitle>
        <DialogContent>
          <div className={styles.container}>
            <div className={styles.mail}>
              <img src={MailImage} alt="Mail" />
            </div>
            {values.isSuccess ? (
              <div className={styles.formContainer}>
                <h3>Thank You!</h3>
                <p>
                  Your subscription has been confirmed. You've been added to our
                  list and will hear from us soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.formContainer}>
                <div
                  className={classNames(
                    styles.wrapInput,
                    styles.validateInput,
                    errors.email && styles.alertValidate
                  )}
                >
                  <input
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={styles.input1}
                    placeholder="Email"
                  />
                  {errors.email && touched.email && (
                    <div style={{ color: 'red', marginTop: '.5rem' }}>
                      {errors.email}
                    </div>
                  )}
                </div>
                <input
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={styles.input1}
                  placeholder="Name"
                />
                <input
                  type="text"
                  name="organization"
                  value={values.organization}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={styles.input1}
                  placeholder="Organization"
                />
                <div className={styles.intersts}>
                  <p>What is your main interest?</p>

                  <FieldArray
                    name="interests"
                    render={arrayHelpers => (
                      <div>
                        {values.intrests.map((interest, index) => (
                          <div key={index}>
                            <label key={index}>
                              <input
                                name="interests"
                                type="checkbox"
                                value={interest}
                                key={index}
                                onChange={e => {
                                  if (e.target.checked) {
                                    arrayHelpers.push(interest);
                                  } else {
                                    const idx = values.intrests.indexOf(
                                      interest
                                    );
                                    arrayHelpers.remove(idx);
                                  }
                                }}
                              />{' '}
                              {interest}
                            </label>
                          </div>
                        ))}
                      </div>
                    )}
                  />
                </div>

                <div className={styles.permission}>
                  <input
                    type="checkbox"
                    name="permission"
                    onChange={event => {
                      const value = event.target.checked;
                      setFieldValue('permission', value);
                    }}
                    checked={values.permission}
                  />
                  <p>
                    The information you provide on this form will only be used
                    to get in touch with you and to provide updates about the
                    EYRA platform every once in a while.
                  </p>
                  {/* {errors.permission && (
                    <div style={{ color: "red", marginTop: ".5rem" }}>
                      {errors.permission}
                    </div>
                  )}*/}
                </div>

                {values.isError ? <p>Please try again later!</p> : null}
                <DialogActions>
                  <Button
                    variant="outlined"
                    color="primary"
                    disabled={!isValid || isSubmitting}
                    type="submit"
                  >
                    Subscribe
                  </Button>
                </DialogActions>
              </form>
            )}
          </div>
        </DialogContent>
      </React.Fragment>
    )}
  </Formik>
);

export default SubscriptionDialog;
