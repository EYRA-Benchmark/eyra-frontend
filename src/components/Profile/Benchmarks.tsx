import React from 'react';
import { Grid } from '@material-ui/core';
import { IBenchmark } from '../../types/';
import OrganizerIcon from '@material-ui/icons/PersonPin';
import ParticipantIcon from '@material-ui/icons/SupervisedUserCircle';
import { BenchmarkCard } from 'src/components/BenchmarkCard';
import styles from './styles.css';
interface IProps {
    benchmarks: IBenchmark[];
}
const Benchmarks = (props: IProps) => {
    const { benchmarks } = props;
    return (
        <Grid container={true} spacing={3}>
            {
                benchmarks.length > 0 ? benchmarks.map((benchmark, index) =>
                    <Grid item={true} key={index} xs={12} sm={4} md={4} style={{ position: 'relative' }}>
                        {index % 2 === 0 ?
                            <div title='Oganizer' className={styles.category}>
                                <OrganizerIcon />
                            </div> :
                            <div title='Participant' className={styles.category}>
                                <ParticipantIcon />
                            </div>
                        }
                        <BenchmarkCard benchmark={benchmark} />
                    </Grid>
                ) : null
            }
        </Grid>
    )
}

export default Benchmarks;