import * as React from 'react';
import { Paper, Container, Grid, Typography } from '@material-ui/core';
import { IAlgorithm, IBenchmark } from 'src/types';
import { getSubmissionsWithJobs, INestedSubmission } from 'src/pages/Submissions';
import { comicApi } from 'src/services/comicApi';
import { UserConsumer, IUserProps, withUser } from '../../context/User';
import UserDetails from 'src/components/Profile/UserDetails';
import Overview from '../../components/Profile/Overview';
import ProfileTabs from '../../components/Profile/ProfileTabs';
import Benchmarks from '../../components/Profile/Benchmarks';
import SubmissionsTable from '../../components/SubmissionsTable';
// interface IProps {
//   submissions: INestedSubmission[];
//   algorithms: IAlgorithm[];
//   benchmarks: IBenchmark[];
// }
interface IState {
  activeIndex: number;
  submissions: INestedSubmission[];
  benchmarks: IBenchmark[];
  algorithms: IAlgorithm[];
}

function TabContainer(props: any) {
  return (
    <Typography component="div" style={{ padding: 24 }}>
      {props.children}
    </Typography>
  );
}
class Profile extends React.Component<IUserProps, IState> {
  state = {
    activeIndex: 0,
    submissions: [],
    benchmarks: [],
    algorithms: [],
  };

  async refresh(props: IUserProps) {
    const { user } = props;
    if (user) {
      const submissions = await getSubmissionsWithJobs({creator: user.id});
      const benchmarks = await comicApi.filter_benchmarks({creator: user.id});
      const algorithms = await comicApi.algorithms({creator: user.id});
      this.setState({submissions, benchmarks, algorithms});
    }
  }

  componentDidMount() {
    this.refresh(this.props);
  }

  componentWillReceiveProps(props: IUserProps) {
    this.refresh(props);
  }

  loadMore = (index: number) => {
    window.scrollTo(0, 0);
    this.setState({ activeIndex: index });
  }

  handleTabChange = (_: any, activeIndex: number) => this.setState({ activeIndex });

  public render() {
    // const { submissions, algorithms, benchmarks } = this.props;
    const { activeIndex, submissions, benchmarks, algorithms } = this.state;
    // debugger;
    return (
      <Container>
        <Paper>
          <Grid container={true} spacing={3}>
            <Grid item={true} xs={12} lg={3} md={3} style={{ borderRight: '1px solid #ccc', paddingRight: 0 }}>
              <UserConsumer>
                {({ user }: IUserProps) => <UserDetails user={user} />}
              </UserConsumer>
              <ProfileTabs
                onChange={this.handleTabChange}
                activeIndex={activeIndex}
              />
            </Grid>
            <Grid item={true} xs={12} lg={9} md={9}>
              {activeIndex === 0 && <TabContainer>
                <Overview loadMore={this.loadMore} algorithms={algorithms} submissions={submissions} benchmarks={benchmarks}/>
              </TabContainer>
              }
              {activeIndex === 1 && <TabContainer><Benchmarks benchmarks={benchmarks}/></TabContainer>}
              {activeIndex === 2 && <TabContainer><SubmissionsTable submissions={submissions}/></TabContainer>}
            </Grid>
          </Grid>
        </Paper>
      </Container >
    );
  }
}

export default withUser(Profile);
