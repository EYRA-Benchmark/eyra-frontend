import React from 'react';
import { Field, Form, Formik, FormikActions } from 'formik';
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
    isSaved: boolean;
}

const onSubmit = async (
    values: IValues,
    { setSubmitting }: FormikActions<IValues>,
) => {
    try {
        await comicApi
            .editAlgorithm(values)
            .then((response) => {
                if (response) {
                    values.isSaved = true;
                }
            });
    } catch (e) {
        alert(e.response.data.error);
    }
    setSubmitting(false);
};

class EditAlgorithm extends React.Component<IProps> {
    state = {
        isEdit: false,
    };

    render() {
        const { id, name, description, source_code_link, paper_link, tags } = this.props.algorithm;
        const initialValues: IValues = {
            id,
            name,
            description,
            source_code_link,
            paper_link,
            tags,
            isSaved: false,
        };
        return (
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                {({ isSubmitting, setFieldValue, values, submitForm }) => (
                    <Form action="#">
                        <div className={styles.container} style={{ width: '70%' }}>
                            {!values.isSaved ?
                                <>
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
                                        <InputTags tags={tags} setField={setFieldValue} />
                                        {/* <Field
                                        component={InputTags}
                                    /> */}
                                    </div>
                                    <div className={styles.inputContainer}>
                                        {/* <Dialog
                                        open={values.isSaved}
                                        onClose={() => {
                                            setFieldValue('isSaved', false);
                                        }}
                                    >
                                        <DialogContent>
                                            Algorithm data saved successfully
                                        </DialogContent>
                                    </Dialog> */}
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
                                </>
                                : <p>Algorithm Data Saved Successfully</p>
                            }
                        </div>
                    </Form>
                )}
            </Formik>
        );
    }
}

export default EditAlgorithm;
