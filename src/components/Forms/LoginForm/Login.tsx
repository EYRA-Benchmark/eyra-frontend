import React from "react";
import * as yup from "yup";
import styles from "./LoginForm.module.css";
import { Formik, Form, Field, FormikActions } from "formik";
import { Button, Dialog, DialogContent } from "@material-ui/core";
import { comicApi } from "src/services/comicApi";
import { RouteComponentProps, withRouter } from "react-router";

const formSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required("Email is required."),
  password: yup.string().required("Password is required"),
});
interface IValues {
  email: string;
  password: string;
  response: string;
}

const initialValues: IValues = {
  email: "",
  password: "",
  response: "",
};
const onSubmit = (props: IProps) => async (
  values: IValues,
  { setSubmitting }: FormikActions<IValues>,
) => {
  try {
    await comicApi
      .login({
        email: values.email,
        password: values.password,
      })
      .then((response) => {
        if (response) {
          comicApi.setToken(response.token);
          props.onLogin();
          props.history.push("/");
        }
      })
      .catch((error) => {
        values.response = `${error.response.data.detail}`;
      });
  } catch (e) {
    console.log(e);
  }
  setSubmitting(false);
};

interface IProps extends RouteComponentProps<{}> {
  onLogin: () => void;
}

const Login = (props: IProps) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={formSchema}
      // handleSubmit={onSubmit}
      onSubmit={onSubmit(props)}
    >
      {({ isSubmitting, setFieldValue, errors, touched, isValid, values }) => (
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
            <Dialog
              open={values.response.length > 0}
              onClose={() => {
                setFieldValue("response", "");
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
              Login
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default withRouter(Login);
