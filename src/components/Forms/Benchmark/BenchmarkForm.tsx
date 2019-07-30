import { Field, Form, Formik } from 'formik';
import { FormikActions } from 'formik';
import React from 'react';
import Thumb from '../../ThumbnailImage/Thumbnail';
// import CustomTextEditor from "../CustomTextEditor";
import Markdown from '@nteract/markdown';
import {
  Button,
  Fab,
  Paper,
  TextField,
  Dialog,
  DialogContent,
} from '@material-ui/core';
import styles from './BenchmarkForm.css';
import { comicApi } from 'src/services/comicApi';
import {
  Edit as EditIcon,
  Visibility as VisibilityIcon,
} from '@material-ui/icons';
import { IBenchmark } from 'src/types';
interface IProps {
  benchmark: IBenchmark;
}

interface IValues {
  id: string;
  name: string;
  short_description: string;
  description: string;
  isSaved: boolean;
  banner_image: any;
  card_image: any;
}

const onSubmit = async (
  values: IValues,
  { setSubmitting }: FormikActions<IValues>,
) => {
  const formdata = new FormData();
  formdata.append('name', values.name);
  formdata.append('description', values.description);
  formdata.append('shor_description', values.short_description);
  formdata.append('banner_image', values.banner_image);
  formdata.append('card_image', values.card_image);
  try {
    await comicApi
      .benchmarkSubmission(values.id, formdata)
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
      banner_image: null,
      card_image: null,
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
              <div className={styles.imageContainer}>
                <label htmlFor="banner_file">Banner Image</label>
                <div className={styles.thumbnailContainer}>
                  <Thumb file={values.banner_image} />
                  <input
                    id="banner_file"
                    name="banner_file"
                    type="file"
                    onChange={(event) => {
                      setFieldValue("banner_image", event.currentTarget.files[0]);
                    }}
                    className="form-control" />

                </div>
                <label htmlFor="card_file">Card Image</label>
                <div className={styles.thumbnailContainer}>
                  <Thumb file={values.card_image} />
                  <input
                    id="card_file"
                    name="card_file"
                    type="file"
                    onChange={(event) => {
                      setFieldValue("card_image", event.currentTarget.files[0]);
                    }}
                    className="form-control" />

                </div>
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
                    {isEdit ? 'Edit' : ' Preview'}
                  </Fab>
                  {this.state.isEdit ? (
                    <Markdown source={desc} className={styles.desc} />
                  ) : (
                      <TextField
                        className={styles.desc}
                        defaultValue={desc}
                        multiline={true}
                        onChange={(event: any) => {
                          setFieldValue('description', event.target.value);
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
                    setFieldValue('isSaved', false);
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
