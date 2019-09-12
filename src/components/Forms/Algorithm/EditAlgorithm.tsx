import { Field, Form, Formik } from 'formik';
import { FormikActions } from 'formik';
import React from 'react';
import { Button } from '@material-ui/core';
import { IAlgorithm } from 'src/types';
import styles from '../styles.css';
import InputTags from '../../InputTags/InputTags';
import { comicApi } from 'src/services/comicApi';
interface IProps {
    algorithm: IAlgorithm;
}

interface IValues {
    id: string;
    name: string;
    description: string;
    source_code_link: string;
    paper_link: string;
    tags: string[];
}

const onSubmit = async (
    values: IValues,
    { setSubmitting }: FormikActions<IValues>,
) => {
    console.log(values);
    const algorithm = await comicApi.create_algorithm(values);
    console.log(algorithm);
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
            source_code_link: '',
            paper_link: '',
            tags: [],
        };

        return (
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                {({ isSubmitting, setFieldValue, values, submitForm }) => (
                    <Form action="#">
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
                                <label htmlFor="source_code_link">Link To Source Code</label>
                                <Field
                                    name="source_code_link"
                                    type="text"
                                    placeholder="link To Source"
                                />
                            </div>
                            <div className={styles.inputContainer}>
                                <label htmlFor="paper_link">Link To Paper/Blog</label>
                                <Field
                                    name="paper_link"
                                    type="text"
                                    placeholder="link To Paper or Blog"
                                />
                            </div>
                            <div className={styles.inputContainer}>
                                <label htmlFor="tags">Keywords</label>
                                <Field
                                    component={InputTags}
                                />
                            </div>
                            <div className={styles.inputContainer}>
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    disabled={isSubmitting}
                                    type="button"
                                    onClick={submitForm}
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
