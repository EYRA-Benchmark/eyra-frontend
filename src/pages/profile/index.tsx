import * as React from 'react';
import { Paper, Container, Grid, Typography } from '@material-ui/core';
import { IAlgorithm, IBenchmark } from 'src/types';
import { getSubmissionsWithJobs, INestedSubmission } from 'src/pages/submissions';
import { comicApi } from 'src/services/comicApi';
import { UserConsumer, IUserProps, withUser } from '../../context/User';
import UserDetails from 'src/components/Profile/UserDetails';
import Overview from '../../components/Profile/Overview';
import ProfileTabs from '../../components/Profile/ProfileTabs';
import Benchmarks from '../../components/Profile/Benchmarks';
import SubmissionsTable from '../../components/SubmissionsTable';
import AlgorithmsTable from 'src/components/AlgorithmsTable';
import VisualizationDialog from 'src/components/Dialog';
import EditAlgorithm from 'src/components/Forms/Algorithm/EditAlgorithm';
import styles from './styles.css';
interface IState {
  activeIndex: number;
  submissions: INestedSubmission[];
  benchmarks: IBenchmark[];
  algorithms: IAlgorithm[];
  algorithmToEdit: IAlgorithm | null;
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
    algorithmToEdit: null,
  };

  async refresh(props: IUserProps) {
    const { user } = props;
    if (user) {
      const submissions = await getSubmissionsWithJobs({ creator: user.id });
      const benchmarks = await comicApi.benchmarks();
      const algorithms = await comicApi.algorithms({ creator: user.id });
      this.setState({ submissions, benchmarks, algorithms });
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
  onEdit = (algorithm: IAlgorithm) => {
    this.setState({ algorithmToEdit: algorithm });
  }
  handleTabChange = (_: any, activeIndex: number) => this.setState({ activeIndex });

  public render() {
    const { activeIndex, submissions, benchmarks, algorithms, algorithmToEdit } = this.state;
    const myBenchmarks = benchmarks.filter(
      (benchmark: IBenchmark) =>
        benchmark.permissions.indexOf('change_benchmark') > -1,
    );
    return (
      <Container>
        <Paper>
          {algorithmToEdit ?
            <VisualizationDialog
              title={'Algorithm'}
              print={false}
              onClose={() => { this.setState({ algorithmToEdit: null }); }}
            >
              <EditAlgorithm algorithm={algorithmToEdit!} />
            </VisualizationDialog> : null
          }
          <Grid container={true} spacing={3}>
            <Grid item={true} xs={12} lg={3} md={3} className={styles.leftContainer}>
              <UserConsumer>
                {({ user }: IUserProps) => <UserDetails user={user} />}
              </UserConsumer>
              <ProfileTabs
                onChange={this.handleTabChange}
                activeIndex={activeIndex}
              />
            </Grid>
            <Grid item={true} xs={12} lg={9} md={9} className={styles.rightContainer}>
              {activeIndex === 0 && <TabContainer>
                <Overview
                  loadMore={this.loadMore}
                  algorithms={algorithms}
                  submissions={submissions}
                  benchmarks={myBenchmarks}
                  onEdit={this.onEdit}
                />
              </TabContainer>
              }
              {activeIndex === 1 &&
                <TabContainer>
                  {myBenchmarks.length > 0 ?
                    <Benchmarks benchmarks={myBenchmarks} />
                    : <p> No Benchmarks Found</p>
                  }
                </TabContainer>}
              {activeIndex === 2 &&
                <TabContainer>{submissions.length > 0 ?
                  <SubmissionsTable submissions={submissions} showMore={true} />
                  : <p>No Submissions Found</p>}
                </TabContainer>}
              {activeIndex === 3 &&
                <TabContainer>{algorithms.length > 0 ?
                  <AlgorithmsTable algorithms={algorithms} onEdit={this.onEdit} showMore={true} />
                  : <p>No Algorithms Found</p>}
                </TabContainer>}
              {activeIndex === 4 &&
                <TabContainer>
                  <div><p>Settings</p></div>
                </TabContainer>}
            </Grid>
          </Grid>
        </Paper>
      </Container >
    );
  }
}

export default withUser(Profile);
