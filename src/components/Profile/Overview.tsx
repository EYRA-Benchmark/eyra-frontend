import React from 'react'
import { Typography } from '@material-ui/core';
import SubmissionsTable from 'src/components/SubmissionsTable';
import AlgorithmsTable from 'src/components/AlgorithmsTable';
import Benchmarks from './Benchmarks';
import styles from './styles.css'
interface IProps {
    submissions: INestedSubmission[];
    algorithms: IAlgorithm[];
    benchmarks: IBenchmark[];
    loadMore: (index: number) => void;
}
const Overview = (props: IProps) => {
    const { submissions, algorithms, benchmarks } = props;
    return (
        <>
            <Typography variant="h5" component="h5">My Benchmarks</Typography>
            <Benchmarks benchmarks={benchmarks} />
            <a onClick={() => props.loadMore(1)} className={styles.link}>More Benchmarks ></a>
            <Typography variant="h5" component="h5">My Submissions</Typography>
            {submissions.length > 1 ?
                <><SubmissionsTable submissions={submissions} />
                    <a onClick={() => props.loadMore(2)} className={styles.link}>More Submissions ></a>
                </> : <p>No Submissions found</p>}

            <Typography variant="h5" component="h5">My Algorithms</Typography>
            {algorithms.length > 1 ?
                <><AlgorithmsTable algorithms={algorithms} />
                    <a onClick={() => props.loadMore(3)} className={styles.link}>More Submissions ></a>
                </> : <p>No Algorithms found</p>}

        </>
    )
}

export default Overview;
