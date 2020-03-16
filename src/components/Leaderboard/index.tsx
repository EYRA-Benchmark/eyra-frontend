import * as React from 'react';
import LeaderboardTable from './LeaderboardTable/LeaderboardTable';
import { ISubmission, IAlgorithm, IJob } from 'src/types';
import { comicApi } from 'src/services/comicApi';

// NestedSubmission is a Submission with a nested Algorithm
export interface INestedSubmission extends ISubmission {
  evaluationJob: IJob;
}
export interface INestedSubmissionWithAlgorithm extends INestedSubmission {
  algorithm_data: IAlgorithm;
}
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

    let nestedSubmissions: INestedSubmission[] = [];
    const nestedSubmissionsWithAlgorithms: INestedSubmissionWithAlgorithm[] = [];
    await Promise.all(
      submissions.map(async (submission: ISubmission) => {
        if (submission.evaluation_job) {
          nestedSubmissions.push({
            ...submission,
            evaluationJob: await comicApi.job(submission.evaluation_job),
          });
        }
      }),
    );
    // get the submissions with evaluation success status only
    nestedSubmissions = nestedSubmissions.filter((submission) => submission.evaluationJob.status === 4);
    // Fetch algorithm data for submissions
    await Promise.all(
      nestedSubmissions.map(async (submission: INestedSubmission) => {
        if (submission.algorithm) {
          nestedSubmissionsWithAlgorithms.push({
            ...submission,
            algorithm_data: await comicApi.algorithm(submission.algorithm),
          });
        }
      }),
    );
    this.setState({ submissions: nestedSubmissionsWithAlgorithms, isLoading: false });
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
