import * as React from 'react';
import { Typography, Paper, Container } from '@material-ui/core';
import styles from './styles.css';
import { IAlgorithm } from 'src/types';
import { IUserProps, withUser } from 'src/context/User';
import { getSubmissionsWithJobs, INestedSubmission } from 'src/pages/Submissions';
import { comicApi } from 'src/services/comicApi';

import SubmissionsTable from 'src/components/SubmissionsTable';
import AlgorithmsTable from 'src/components/AlgorithmsTable';

interface IProps {
  submissions: INestedSubmission[];
  algorithms: IAlgorithm[];
}

const UserDetails = withUser((props: IUserProps) => {
  const { user } = props;
  return (
    user ?
      (
        <div ><span>Name:</span>{'  ' + user.first_name + '  ' + user.last_name}</div>
      ) : null
  );
});

class Profile extends React.Component<IProps & IUserProps> {
  static async getInitialProps(): Promise<IProps> {
    debugger;
    return {
      // submissions: await getSubmissionsWithJobs(),
      algorithms: await comicApi.algorithms({ creator: 9 }),
      submissions: await getSubmissionsWithJobs({ creator: 9 }),
    };
  }

  public render() {
    debugger;
    const { submissions, algorithms } = this.props;
    return (
      <Container>
        <UserDetails />
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
