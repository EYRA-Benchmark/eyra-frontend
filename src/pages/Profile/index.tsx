import * as React from 'react';
import { Typography, Paper, Container } from '@material-ui/core';
import styles from './styles.css';
import { IAlgorithm } from 'src/types';

import { getSubmissionsWithJobs, INestedSubmission } from 'src/pages/Submissions';
import { comicApi } from 'src/services/comicApi';

import SubmissionsTable from 'src/components/SubmissionsTable';
import AlgorithmsTable from 'src/components/AlgorithmsTable';

interface IProps {
  submissions: INestedSubmission[];
  algorithms: IAlgorithm[];
}



class Profile extends React.Component<IProps & IUserProps> {
  static async getInitialProps(): Promise<IProps> {
    return {
      algorithms: await comicApi.algorithms({ creator: 3 }),
      submissions: await getSubmissionsWithJobs({ creator: 3 }),
    };
  }

  public render() {
    const { submissions, algorithms } = this.props;
    return (
      <Container>
        {/* <UserDetails /> */}
        <Paper className={styles.container}>
          <Typography variant="h5" component="h5">My submissions:</Typography>
          {submissions.length > 1 ? <SubmissionsTable submissions={submissions} /> : <p>No Submissions found</p>}
        </Paper>

        <Paper className={styles.container}>
          <Typography variant="h5" component="h5">My algorithms:</Typography>
          {algorithms.length > 1 ? <AlgorithmsTable algorithms={algorithms} /> : <p>No Algorithms found</p>}
        </Paper>
      </Container>
    );
  }
}

export default Profile;
