import React from 'react';
import { Typography } from '@material-ui/core';
import SubmissionsTable from 'src/components/SubmissionsTable';
import AlgorithmsTable from 'src/components/AlgorithmsTable';
import Benchmarks from './Benchmarks';
import styles from './styles.css';
import { INestedSubmission } from 'src/pages/submissions';
import { IAlgorithm, IBenchmark } from '../../types';
interface IProps {
    submissions: INestedSubmission[];
    algorithms: IAlgorithm[];
    benchmarks: IBenchmark[];
    loadMore: (index: number) => void;
    onEdit: (algorithm: IAlgorithm) => void;
}
const Overview = (props: IProps) => {
    const { submissions, algorithms, benchmarks } = props;

    // benchmarks.splice(
    //     benchmarks.findIndex((e) => e.id === 'c5c803c9-d7b2-4d99-8c50-fb9dc267a0b0'), 1);
    return (
        <>
            <Typography variant="h5" component="h5">My Benchmarks</Typography>
            {benchmarks.length > 0 ?
                <Benchmarks benchmarks={benchmarks} />
                : <p>No Benchmarks found</p>
            }
            {benchmarks.length > 3 ?
                <a onClick={() => props.loadMore(1)} className={styles.link}>More Benchmarks ></a> : null}
            <Typography variant="h5" component="h5">My Submissions</Typography>
            {submissions.length > 0 ?
                <SubmissionsTable submissions={submissions} showMore={false} />
                : <p>No Submissions found</p>}
            {submissions.length > 3 ?
                <a onClick={() => props.loadMore(2)} className={styles.link}>More Submissions ></a> : null}
            <Typography variant="h5" component="h5">My Algorithms</Typography>
            {algorithms.length > 0 ?
                <AlgorithmsTable algorithms={algorithms} onEdit={props.onEdit} showMore={false} />
                : <p>No Algorithms found</p>}
            {algorithms.length > 3 ?
                <a onClick={() => props.loadMore(3)} className={styles.link}>More Algorithms ></a> : null}
        </>
    );
};

export default Overview;
