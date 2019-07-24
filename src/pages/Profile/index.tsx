import * as React from 'react';
import { Typography, Paper, Container, Grid, IconButton, Fab } from '@material-ui/core';
import styles from './styles.css';
import { IAlgorithm, IBenchmark } from 'src/types';
import OrganizerIcon from '@material-ui/icons/PersonPin';
import ParticipantIcon from '@material-ui/icons/SupervisedUserCircle'
import { getSubmissionsWithJobs, INestedSubmission } from 'src/pages/Submissions';
import { comicApi } from 'src/services/comicApi';
import { UserConsumer, IUserProps } from '../../context/User';
import SubmissionsTable from 'src/components/SubmissionsTable';
import AlgorithmsTable from 'src/components/AlgorithmsTable';
import UserDetails from 'src/components/Profile/UserDetails';
import { BenchmarkCard } from 'src/components/BenchmarkCard';

interface IProps {
  submissions: INestedSubmission[];
  algorithms: IAlgorithm[];
  benchmarks: IBenchmark[];
}

class Profile extends React.Component<IProps & IUserProps> {
  static async getInitialProps(): Promise<IProps> {
    return {
      algorithms: await comicApi.algorithms({ creator: 3 }),
      submissions: await getSubmissionsWithJobs({ creator: 3 }),
      benchmarks: await comicApi.filter_benchmarks({ creator: 2 }),
    };
  }

  public render() {
    const { submissions, algorithms, benchmarks } = this.props;
    return (
      <Container>
        <Paper>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={3} md={3}>
              <UserConsumer>
                {({ user }: IUserProps) => <UserDetails user={user} />}
              </UserConsumer>
            </Grid>
            <Grid item xs={12} lg={9} md={9}>
              <Typography variant="h5" component="h5">My submissions</Typography>
              {submissions.length > 1 ? <SubmissionsTable submissions={submissions} /> : <p>No Submissions found</p>}
              <Typography variant="h5" component="h5">My algorithms</Typography>
              {algorithms.length > 1 ? <AlgorithmsTable algorithms={algorithms} /> : <p>No Algorithms found</p>}
              <Typography variant="h5" component="h5">My Benchmarks</Typography>
              <Grid container={true} spacing={3}>
                {benchmarks.length > 1 ? benchmarks.map((benchmark, index) =>
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
            </Grid>
          </Grid>
        </Paper>
      </Container >
    );
  }
}

export default Profile;
