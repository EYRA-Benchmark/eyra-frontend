import * as React from "react";
import LeaderboardTable from "./LeaderboardTable/LeaderboardTable";
import { ISubmission } from "../../../../../types/submission";
import { IAlgorithm } from "../../../../../types/algorithm";
import { comicApi } from "../../../../../services/comicApi";

// interface IAlgorithm {
//   container: string;
//   created: string;
//   creator: number;
//   description: string;
//   id: string;
//   interface: string;
//   modified: string;
//   name: string;
// }
//
// interface IBaseSubmission {
//   algorithm_job: any;
//   benchmark: string;
//   created: string;
//   creator: number;
//   evaluation_job: any;
//   id: string;
//   metrics_json: any;
//   modified: string;
//   name: string;
// }

// interface IRawSubmission extends IBaseSubmission {
//   algorithm: string;
// }

// Omit allows one to remove a property from a type/interface
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
// NestedSubmission is a Submission with a nested Algorithm
export type INestedSubmission = Omit<ISubmission, "algorithm"> & {
  algorithm: IAlgorithm;
};

interface IProps {
  benchmarkID: string;
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
    const submissions = await comicApi.submissions({
      benchmark: this.props.benchmarkID,
    });
    const evaluatedSubmissions = submissions.filter(
      (submission) => submission.metrics_json !== null,
    );
    const nestedSubmissions: INestedSubmission[] = [];
    await Promise.all(
      evaluatedSubmissions.map(async (submission) => {
        nestedSubmissions.push({
          ...submission,
          algorithm: await comicApi.algorithm(submission.algorithm),
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