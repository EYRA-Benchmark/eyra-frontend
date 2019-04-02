import Button from '@material-ui/core/Button';
import { Field, Form, Formik } from 'formik';
import { FormikActions } from 'formik/dist/types';
import React from 'react';
import Markdown from '@nteract/markdown';
import { Paper, TextField } from '@material-ui/core';
import styles from './BenchmarkForm.module.css';
import Fab from '@material-ui/core/Fab';
import { comicApi } from '../../../services/comicApi';
import EditIcon from '@material-ui/icons/Edit';
import { IBenchmark } from '../../../types';

interface IProps {
  benchmark: IBenchmark;
}
interface IState {
  editDesc: boolean;
  desc: string;
}
interface IValues {
  id: string;
  name: string;
  short_description: string;
  description: string;
}

const onSubmit = async (
  values: IValues,
  { setSubmitting }: FormikActions<IValues>
) => {
  console.log(values.id);
  try {
    const benchmark = await comicApi.benchmarkSubmission(values.id, {
      name: values.name,
      description: values.description,
      short_description: values.short_description
    });
    console.log(benchmark);
  } catch (e) {
    console.log(e);
  }
  setSubmitting(false);
};

class BenchmarkForm extends React.Component<IProps, IState> {
  state = {
    editDesc: false,
    desc: this.props.benchmark.description
  };

  render() {
    const { desc } = this.state;
    const { id, name, short_description } = this.props.benchmark;
    const initialValues: IValues = {
      id,
      name,
      short_description,
      description: desc
    };
    return (
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ isSubmitting, setFieldValue }) => (
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
                <Paper className={styles.desc}>
                  <Fab
                    size="small"
                    onClick={this.enableEdit}
                    style={{ float: 'right' }}
                  >
                    <EditIcon />
                  </Fab>
                  {this.state.editDesc ? (
                    <TextField
                      style={{ width: '100%' }}
                      defaultValue={desc}
                      multiline={true}
                      onChange={(event: any) => {
                        setFieldValue('description', event.target.value);
                        this.setState({
                          desc: event.target.value
                        });
                      }}
                    />
                  ) : (
                    <Markdown source={desc} />
                  )}
                </Paper>
              </div>

              <div className={styles.inputContainer}>
                <Button
                  variant="outlined"
                  color="primary"
                  disabled={isSubmitting}
                  type="submit"
                >
                  Submit
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
      editDesc: !this.state.editDesc
    });
  };
}

export default BenchmarkForm;
