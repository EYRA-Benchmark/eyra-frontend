import * as React from 'react';
import { Typography, Paper, Container, Divider } from '@material-ui/core';
import { styled } from '@material-ui/styles';

import { IAlgorithm, IUser } from 'src/types';
import { IUserProps, withUser } from 'src/context/User';
import { getSubmissionsWithJobs, INestedSubmission } from 'src/pages/Submissions';
import { comicApi } from 'src/services/comicApi';

import SubmissionsTable from 'src/components/SubmissionsTable';
import AlgorithmsTable from 'src/components/AlgorithmsTable';

interface IProps extends IUserProps {
  submissions: INestedSubmission[];
  algorithms: IAlgorithm[];
  user: IUser;
}

// const UserDetails = withUser((props: IUser) => <div>{JSON.stringify(props)}</div>);

class Profile extends React.Component<IProps & IUserProps> {
  static async getInitialProps(): Promise<IProps> {
    return {
      // submissions: await getSubmissionsWithJobs(),
      // algorithms: await comicApi.algorithms(),
      // submissions: getSubmissionsWithJobs({ creator:  })
    };
  }

  public render() {
    const { user } = this.props;
    return (
      <Container>
        {user ? <div>{user.first_name}</div> : null}
        <Paper>
          {/* <Typography variant="h3" component="h3">My submissions:</Typography>
          <SubmissionsTable submissions={this.props.submissions} />
        </Paper>
        <MiddleDivider variant="middle" />
        <Paper>
          <Typography variant="h3" component="h3">My algorithms:</Typography>
          <AlgorithmsTable algorithms={this.props.algorithms} /> */}
        </Paper>
      </Container>
    );
  }
}

export default withUser(Profile);

const MiddleDivider = styled(Divider)({
  marginTop: '1em',
  marginBottom: '1em',
});
