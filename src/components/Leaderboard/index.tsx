import * as React from 'react';
import LeaderboardTable from './LeaderboardTable/LeaderboardTable';
import { ISubmission, IImplementation } from 'src/types';
import { comicApi } from 'src/services/comicApi';
import { Omit } from 'src/utils';

// NestedSubmission is a Submission with a nested Algorithm
export type INestedSubmission = Omit<ISubmission, 'implementation'> & {
  implementation: IImplementation;
};

interface IProps {
  benchmarkID: string;
  isPrivate: boolean;
}

interface IState {
  submissions: INestedSubmission[];
  isLoading: boolean;
}

class Leaderboard extends React.Component<IProps, IState> {
  state = {
    submissions: [],
    isLoading: true,
  };
  async componentWillMount() {
    let submissions;
    if (this.props.isPrivate) {
      submissions = await comicApi.submissions({
        benchmark: this.props.benchmarkID,
        is_private: 1,
      });
    } else {
      submissions = await comicApi.submissions({
        benchmark: this.props.benchmarkID,
        is_private: 0,
      });
    }
    // const evaluatedSubmissions = submissions.filter(
    //   (submission) => submission.metrics_json !== null,
    // );
    const nestedSubmissions: INestedSubmission[] = [];
    await Promise.all(
      submissions.map(async (submission) => {
        nestedSubmissions.push({
          ...submission,
          implementation: await comicApi.implementation(submission.implementation),
        });
      }),
    );
    this.setState({ submissions: nestedSubmissions, isLoading: false });
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }

    if (this.state.submissions.length === 0) {
      return <div>No submissions found...</div>;
    }
    return <LeaderboardTable submissions={this.state.submissions} />;
  }
}
export default Leaderboard;
