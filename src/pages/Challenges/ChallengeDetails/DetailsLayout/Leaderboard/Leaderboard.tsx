import * as React from "react";
import axios from '../../../../../services/SetUpAxios';
import LeaderboardTable from "./LeaderboardTable/LeaderboardTable";

interface IAlgorithm {
  container: string;
  created: string;
  creator: number;
  description: string;
  id: string;
  interface: string;
  modified: string;
  name: string;
}

interface IBaseSubmission {
  algorithm_job: any;
  benchmark: string;
  created: string;
  creator: number;
  evaluation_job: any;
  id: string;
  metrics_json: any;
  modified: string;
  name: string;
}

interface IRawSubmission extends IBaseSubmission {
  algorithm: string;
}

export interface ISubmission extends IBaseSubmission {
  algorithm: IAlgorithm;
}

interface IProps {
  benchmarkID: string;
}

interface IState {
  submissions: ISubmission[];
  isLoading: boolean;
}

class Leaderboard extends React.Component<IProps, IState> {
  state = {
    submissions: [],
    isLoading: true,
  }
  async componentWillMount() {
    const response = await axios.get<IRawSubmission[]>(`submissions/?benchmark=${this.props.benchmarkID}`);
    const rawSubmissions = response.data.filter(submission => submission.metrics_json !== null);
    const submissions: ISubmission[] = [];
    await Promise.all(rawSubmissions.map(async submission => {
      const resp = await axios.get<IAlgorithm>(`algorithms/${submission.algorithm}`);
      submissions.push({ ...submission, algorithm: resp.data });
    }));
    this.setState({ submissions, isLoading: false });
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>
    }
    if (this.state.submissions.length === 0) {
      return <div>No submissions found...</div>
    }
    return <LeaderboardTable submissions={this.state.submissions} />;
  }
}
export default Leaderboard;
