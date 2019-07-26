import React from 'react'
import { Typography, Grid } from '@material-ui/core';
import SubmissionsTable from 'src/components/SubmissionsTable';
import AlgorithmsTable from 'src/components/AlgorithmsTable';
import Benchmarks from './Benchmarks';
interface IProps {
    submissions: INestedSubmission[];
    algorithms: IAlgorithm[];
    benchmarks: IBenchmark[];
}
const Overview = (props: IProps) => {
    const { submissions, algorithms, benchmarks } = props;
    return (
        <>
            <Typography variant="h5" component="h5">My Benchmarks</Typography>
            <Benchmarks benchmarks={benchmarks} />
            <Typography variant="h5" component="h5">My Submissions</Typography>
            {submissions.length > 1 ? <SubmissionsTable submissions={submissions} /> : <p>No Submissions found</p>}
            <Typography variant="h5" component="h5">My Algorithms</Typography>
            {algorithms.length > 1 ? <AlgorithmsTable algorithms={algorithms} /> : <p>No Algorithms found</p>}
        </>
    )
}

export default Overview;
