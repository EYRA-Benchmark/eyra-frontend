import * as React from 'react';
import { Paper, Container, Grid, Typography } from '@material-ui/core';
import { IAlgorithm, IBenchmark } from 'src/types';
import { getSubmissionsWithJobs, INestedSubmission } from 'src/pages/Submissions';
import { comicApi } from 'src/services/comicApi';
import { UserConsumer, IUserProps } from '../../context/User';
import UserDetails from 'src/components/Profile/UserDetails';
import Overview from '../../components/Profile/Overview';
import ProfileTabs from '../../components/Profile/ProfileTabs';
import Benchmarks from '../../components/Profile/Benchmarks';
import SubmissionsTable from '../../components/SubmissionsTable';
interface IProps {
  submissions: INestedSubmission[];
  algorithms: IAlgorithm[];
  benchmarks: IBenchmark[];
}
interface IState {
  activeIndex: number
}
function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 24 }}>
      {props.children}
    </Typography>
  );
}
class Profile extends React.Component<IProps & IUserProps, IState> {
  state = {
    activeIndex: 0,
  }

  static async getInitialProps(): Promise<IProps> {
    return {
      algorithms: await comicApi.algorithms({ creator: 3 }),
      submissions: await getSubmissionsWithJobs({ creator: 3 }),
      benchmarks: await comicApi.filter_benchmarks({ creator: 2 }),
    };
  }
  handleTabChange = (_, activeIndex: number) => this.setState({ activeIndex });
  public render() {
    const { submissions, algorithms, benchmarks } = this.props;
    const { activeIndex } = this.state;
    return (
      <Container>
        <Paper>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={3} md={3} style={{ borderRight: '1px solid #ccc', paddingRight: 0 }}>
              <UserConsumer>
                {({ user }: IUserProps) => <UserDetails user={user} />}
              </UserConsumer>
              <ProfileTabs onChange={this.handleTabChange} activeIndex={activeIndex}></ProfileTabs>
            </Grid>
            <Grid item xs={12} lg={9} md={9}>
              {activeIndex === 0 && <TabContainer>
                <Overview algorithms={algorithms} submissions={submissions} benchmarks={benchmarks}></Overview>
              </TabContainer>
              }
              {activeIndex === 1 && <TabContainer><Benchmarks benchmarks={benchmarks}></Benchmarks></TabContainer>}
              {activeIndex === 2 && <TabContainer><SubmissionsTable submissions={submissions}></SubmissionsTable></TabContainer>}
            </Grid>
          </Grid>
        </Paper>
      </Container >
    );
  }
}

export default Profile;
