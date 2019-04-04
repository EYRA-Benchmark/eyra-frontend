import React from "react";

import classNames from "classnames";
import { Formik, FormikActions } from "formik";
import * as yup from "yup";

import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";

import styles from "./SubscriptionDialog.module.css";

import MailImage from "src/assets/images/mail.png";
import { submitContactForm } from "src/services/contactFormSubmission";

const formSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required(),
  name: yup.string(),
  organization: yup.string(),
});

interface IValues {
  email: string;
  name: string;
  organization: string;
  isSuccess: boolean;
  isError: boolean;
}

const initialValues: IValues = {
  email: "",
  name: "",
  organization: "",
  isSuccess: false,
  isError: false,
};

const onSubmit = async (
  values: IValues,
  { setSubmitting }: FormikActions<IValues>,
) => {
  const isSuccess = await submitContactForm(
    values.name,
    values.organization,
    values.email,
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
      submitCount,
      isSubmitting,
    }) => (
      <React.Fragment>
        <DialogTitle>Stay in touch</DialogTitle>
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
                    errors.email && styles.alertValidate,
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
                    <div style={{ color: "red", marginTop: ".5rem" }}>
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
                {values.isError ? <p>Please try again later!</p> : null}
                <DialogActions>
                  <Button
                    variant="outlined"
                    color="primary"
                    disabled={!isValid || isSubmitting}
                    type="submit"
                  >
                    Subscibe
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
