import { Field, Form, Formik } from 'formik';
import { FormikActions } from 'formik';
import React from 'react';
import { Button } from '@material-ui/core';
import { IAlgorithm } from 'src/types';
import styles from '../styles.css';
interface IProps {
    algorithm: IAlgorithm;
}

interface IValues {
    id: string;
    name: string;
    // short_description: string;
    description: string;
}

const onSubmit = async (
    values: IValues,
    { setSubmitting }: FormikActions<IValues>,
) => {
    const formdata = new FormData();
    formdata.append('name', values.name);
    formdata.append('description', values.description);
    // formdata.append('short_description', values.short_description);
    setSubmitting(false);
};

class EditAlgorithm extends React.Component<IProps> {
    state = {
        isEdit: false,
        desc: this.props.algorithm.description,
    };

    render() {
        const { desc } = this.state;

        const { id, name } = this.props.algorithm;
        const initialValues: IValues = {
            id,
            name,
            description: desc,
        };

        return (
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                {({ isSubmitting, setFieldValue, values }) => (
                    <Form>
                        <div className={styles.container} style={{ width: '70%' }}>
                            <div className={styles.inputContainer}>
                                <label htmlFor="name">Name</label>
                                <Field
                                    name="name"
                                    type="text"
                                    placeholder="Algorithm Name"
                                    autoFocus={true}
                                />
                            </div>
                            <div className={styles.inputContainer}>
                                <label htmlFor="description">Description</label>
                                <Field
                                    name="description"
                                    type="text"
                                    placeholder="Description"
                                />
                            </div>
                            <div className={styles.inputContainer}>
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

export default EditAlgorithm;
