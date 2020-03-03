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
import styles from '../styles.css';
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
  truth_description: string;
  metrics_description: string;
  aboutBenchmark: string;
}

const onSubmit = async (
  values: IValues,
  { setSubmitting }: FormikActions<IValues>,
) => {
  const formdata = new FormData();
  formdata.append('name', values.name);
  formdata.append('description', values.description);
  formdata.append('data_description', values.data_description);
  formdata.append('truth_description', values.truth_description);
  formdata.append('metrics_description', values.metrics_description);
  formdata.append('short_description', values.short_description);
  formdata.append('about', values.aboutBenchmark);
  if (typeof (values.banner_image) === 'object') {
    formdata.append('banner_image', values.banner_image);
  }
  if (typeof (values.card_image) === 'object') {
    formdata.append('card_image', values.card_image);
  }

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
    truth: this.props.benchmark.truth_description,
    metrics: this.props.benchmark.metrics_description,
    banner_image: this.props.benchmark.banner_image,
    card_image: this.props.benchmark.card_image,
    about: this.props.benchmark.about,
  };

  render() {
    const { desc, data, truth, metrics, banner_image, card_image, about } = this.state;
    console.log('about', about)
    const { id, name, short_description } = this.props.benchmark;
    const initialValues: IValues = {
      id,
      name,
      short_description,
      description: desc,
      isSaved: false,
      banner_image,
      card_image,
      data_description: data,
      truth_description: truth,
      metrics_description: metrics,
      aboutBenchmark: about
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
                <label htmlFor="banner_file">Banner Image</label>
                <input
                  id="banner_file"
                  name="banner_file"
                  type="file"
                  onChange={(event) => {
                    setFieldValue('banner_image', event.currentTarget.files![0]);
                  }}
                  className="form-control"
                />
              </div>
              <div className={styles.imageContainer}>
                <div className={styles.thumbnailContainer}>
                  <Thumb file={values.banner_image} isBanner={true} />
                </div>
              </div>
              <div className={styles.inputContainer}>
                <label htmlFor="card_file">Card Image</label>
                <input
                  id="card_file"
                  name="card_file"
                  type="file"
                  onChange={(event) => {
                    setFieldValue('card_image', event.currentTarget.files![0]);
                  }}
                  className="form-control"
                />

              </div>
              <div className={styles.imageContainer}>
                <div className={styles.thumbnailContainer}>
                  <Thumb file={values.card_image} isBanner={false} />
                </div>
              </div>
              <DescriptionEditor
                label={'About'}
                defaultValue={about ? about : 'Add description about people, team, etc'}
                onChange={(event: any) => {
                  setFieldValue('aboutBenchmark', event.target.value);
                  this.setState({
                    about: event.target.value,
                  });
                }}
              />
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
              <DescriptionEditor
                label={'Truth Description'}
                defaultValue={truth}
                onChange={(event: any) => {
                  setFieldValue('truth_description', event.target.value);
                  this.setState({
                    truth: event.target.value,
                  });
                }}
              />
              <DescriptionEditor
                label={'Metrics Description'}
                defaultValue={metrics}
                onChange={(event: any) => {
                  setFieldValue('metrics_description', event.target.value);
                  this.setState({
                    metrics: event.target.value,
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
