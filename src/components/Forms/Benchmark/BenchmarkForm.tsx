import { Field, Form, Formik } from 'formik';
import { FormikActions } from 'formik';
import React from 'react';
import Thumb from '../../ThumbnailImage/';
import DescriptionEditor from './DescriptionEditor';
import {
  Button,
  Dialog,
  DialogContent,
} from '@material-ui/core';
import styles from './BenchmarkForm.css';
import { comicApi } from 'src/services/comicApi';
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
  data_description: string;
}

const onSubmit = async (
  values: IValues,
  { setSubmitting }: FormikActions<IValues>,
) => {
  const formdata = new FormData();
  formdata.append('name', values.name);
  formdata.append('description', values.description);
  formdata.append('data_description', values.data_description);
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
    data: this.props.benchmark.data_description,
  };

  render() {
    const { desc, data } = this.state;

    const { id, name, short_description } = this.props.benchmark;
    const initialValues: IValues = {
      id,
      name,
      short_description,
      description: desc,
      isSaved: false,
      banner_image: null,
      card_image: null,
      data_description: data,
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

              {/*    <CustomTextEditor
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
               */}
              <DescriptionEditor
                label={'Description'}
                defaultValue={desc}
                onChange={(event: any) => {
                  setFieldValue('description', event.target.value);
                  this.setState({
                    desc: event.target.value,
                  });
                }}
              />
              <DescriptionEditor
                label={'Data Description'}
                defaultValue={data}
                onChange={(event: any) => {
                  setFieldValue('data_description', event.target.value);
                  this.setState({
                    data: event.target.value,
                  });
                }}
              />

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
}

export default BenchmarkForm;
