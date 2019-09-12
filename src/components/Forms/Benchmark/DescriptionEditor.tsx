import React, { useState } from 'react';
import {
    Fab,
    Paper,
    TextField,
} from '@material-ui/core';
import styles from '../styles.css';
import {
    Edit as EditIcon,
    Visibility as VisibilityIcon,
} from '@material-ui/icons';
import Markdown from '@nteract/markdown';
interface IProps {
    onChange: (event: any) => void;
    defaultValue: any;
    label: string;
}
const DescriptionEditor = (props: IProps) => {
    const [edit, setEdit] = useState(true);
    const { onChange, defaultValue, label } = props;

    return (
        <div className={styles.inputContainer}>
            <label htmlFor={label}>{label}</label>
            <Paper className={styles.descContainer}>
                <Fab
                    size="small"
                    className={styles.fabRoot}
                    onClick={() => setEdit(!edit)}
                    classes={{ label: styles.label, root: styles.fabRoot }}
                    color="primary"
                    title={edit ? 'Edit' : 'Preview'}
                >
                    {edit ? <EditIcon /> : <VisibilityIcon />}

                </Fab>
                {edit ? (
                    <Markdown source={defaultValue} className={styles.desc} />
                ) : (
                        <TextField
                            className={styles.desc}
                            defaultValue={defaultValue}
                            multiline={true}
                            onChange={onChange}
                        />

                    )}
            </Paper>
        </div>
    );
};

export default DescriptionEditor;
