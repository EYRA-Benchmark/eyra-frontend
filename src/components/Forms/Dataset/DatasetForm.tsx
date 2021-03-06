import { Field, Form, Formik } from 'formik';
import { FormikActions } from 'formik';
import React from 'react';
import Markdown from '@nteract/markdown';
import { Button, Fab, Paper, TextField } from '@material-ui/core';
import styles from './DatasetForm.css';
import { comicApi } from 'src/services/comicApi';
import {
  Edit as EditIcon,
  Visibility as VisibilityIcon,
} from '@material-ui/icons';
import { IDataset } from 'src/types';

interface IProps {
  dataset: IDataset;
}
interface IState {
  isEdit: boolean;
  desc: string;
}
interface IValues {
  id: string;
  name: string;
  short_description: string;
  long_description: string;
}

const onSubmit = async (
  values: IValues,
  { setSubmitting }: FormikActions<IValues>,
) => {
  try {
    await comicApi.datasetSubmission(values.id, {
      name: values.name,
      short_description: values.short_description,
      long_description: values.long_description,
    });
  } catch (e) {
    console.log(e);
  }
  setSubmitting(false);
};

class DatasetForm extends React.Component<IProps, IState> {
  state = {
    isEdit: false,
    desc: this.props.dataset.long_description,
  };

  render() {
    const { desc, isEdit } = this.state;
    const { id, name, short_description } = this.props.dataset;
    const initialValues: IValues = {
      id,
      name,
      short_description,
      long_description: desc,
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
                  placeholder="Dataset Title"
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
      isEdit: !this.state.isEdit,
    });
  }
}

export default DatasetForm;
