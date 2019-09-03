import React from 'react';
import Observable from 'src/components/Observables';
import { Paper } from '@material-ui/core';
import { INestedSubmission } from '..';
import styles from './styles.css';
interface IProps {
    items: INestedSubmission[];
}

const CompareDialog = (props: IProps) => {

    return (
        <div className={styles.container}>
            {props.items.map((item, i) => {
                return (
                    <Paper key={i} className={styles.item}>
                        {item.name}
                        <Observable jobId={item.evaluation_job} isNotebook={false} />
                    </Paper>);
            })}
        </div>

    );
};

export default CompareDialog;
