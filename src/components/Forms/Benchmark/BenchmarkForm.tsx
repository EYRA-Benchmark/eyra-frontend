import { Field, Form, Formik } from "formik";
import { FormikActions } from "formik";
import React from "react";
// import CustomTextEditor from "../CustomTextEditor";
import Markdown from "@nteract/markdown";
import {
  Button,
  Fab,
  Paper,
  TextField,
  Dialog,
  DialogContent,
} from "@material-ui/core";
import styles from "./BenchmarkForm.module.css";
import { comicApi } from "src/services/comicApi";
import {
  Edit as EditIcon,
  Visibility as VisibilityIcon,
} from "@material-ui/icons";
import { IBenchmark } from "src/types";
interface IProps {
  benchmark: IBenchmark;
}

interface IValues {
  id: string;
  name: string;
  short_description: string;
  description: string;
  isSaved: boolean;
}

const onSubmit = async (
  values: IValues,
  { setSubmitting }: FormikActions<IValues>,
) => {
  try {
    await comicApi
      .benchmarkSubmission(values.id, {
        name: values.name,
        description: values.description,
        short_description: values.short_description,
      })
      .then((response) => {
        if (response) {
          values.isSaved = true;
        }
      });
  } catch (e) {
    console.log(e);
  }
  setSubmitting(false);
};

class BenchmarkForm extends React.Component<IProps> {
  state = {
    isEdit: false,
    desc: this.props.benchmark.description,
  };

  render() {
    const { desc, isEdit } = this.state;
    const { id, name, short_description } = this.props.benchmark;
    const initialValues: IValues = {
      id,
      name,
      short_description,
      description: desc,
      isSaved: false,
    };

    return (
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ isSubmitting, setFieldValue, values }) => (
          <Form>
            <div className={styles.container}>
              <div className={styles.inputContainer}>
                <label htmlFor="name">Title</label>
                <Field
                  name="name"
                  type="text"
                  placeholder="Benchmark Title"
                  autoFocus={true}
                />
              </div>
              <div className={styles.inputContainer}>
                <label htmlFor="short_description">Short Description</label>
                <Field
                  name="short_description"
                  type="text"
                  placeholder="Short Description"
                />
              </div>
              <div className={styles.inputContainer}>
                <label htmlFor="description">Description</label>
                <Paper className={styles.descContainer}>
                  <Fab
                    size="small"
                    className={styles.fabRoot}
                    onClick={this.enableEdit}
                    classes={{ label: styles.label, root: styles.fabRoot }}
                    variant="extended"
                    color="primary"
                  >
                    {isEdit ? <EditIcon /> : <VisibilityIcon />}
                    {isEdit ? "Edit" : " Preview"}
                  </Fab>
                  {this.state.isEdit ? (
                    <Markdown source={desc} className={styles.desc} />
                  ) : (
                    <TextField
                      className={styles.desc}
                      defaultValue={desc}
                      multiline={true}
                      onChange={(event: any) => {
                        setFieldValue("description", event.target.value);
                        this.setState({
                          desc: event.target.value,
                        });
                      }}
                    />
                    // <CustomTextEditor
                    //   defaultValue={desc}
                    //   defaultFormat="markdown"
                    //   showEditor={false}
                    //   onChange={(value) => {
                    //     setFieldValue("description", value);
                    //     this.setState({
                    //       desc: RichTextEditor.createValueFromString(
                    //         value,
                    //         "markdown",
                    //       ),
                    //     });
                    //   }}
                    // />
                  )}
                </Paper>
              </div>

              <div className={styles.inputContainer}>
                <Dialog
                  open={values.isSaved}
                  onClose={() => {
                    setFieldValue("isSaved", false);
                  }}
                >
                  <DialogContent>
                    Benchmarks data saved successfully
                  </DialogContent>
                </Dialog>
                <Button
                  variant="outlined"
                  color="primary"
                  disabled={isSubmitting}
                  type="submit"
                >
                  Save
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    );
  }
  private enableEdit = () => {
    this.setState({
      isEdit: !this.state.isEdit,
    });
  }
}

export default BenchmarkForm;
