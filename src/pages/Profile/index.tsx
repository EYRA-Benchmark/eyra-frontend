import * as React from 'react';
import { Typography, Paper, Container, Divider } from '@material-ui/core';
import { styled } from '@material-ui/styles';

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

const UserDetails = withUser((props) => <div>{JSON.stringify(props)}</div>);

class Profile extends React.Component<IProps & IUserProps> {
  static async getInitialProps(): Promise<IProps> {
    return {
      submissions: await getSubmissionsWithJobs(),
      algorithms: await comicApi.algorithms(),
      // submissions: getSubmissionsWithJobs({ creator: userID })
    };
  }

  public render() {
    return (
      <Container>
        <UserDetails />
        <Paper>
          <Typography variant="h3" component="h3">My submissions:</Typography>
          <SubmissionsTable submissions={this.props.submissions} />
        </Paper>
        <MiddleDivider variant="middle" />
        <Paper>
          <Typography variant="h3" component="h3">My algorithms:</Typography>
          <AlgorithmsTable algorithms={this.props.algorithms} />
        </Paper>
      </Container>
    );
  }
}

export default Profile;

const MiddleDivider = styled(Divider)({
  marginTop: '1em',
  marginBottom: '1em',
});
