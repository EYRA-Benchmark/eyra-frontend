import * as React from 'react';
import { NextContext } from 'next';

import { comicApi } from 'src/services/comicApi';
import { IJob, ISubmission, IBenchmark } from 'src/types';
import SubmissionsTable from 'src/components/SubmissionsTable';
import { Merge } from 'src/utils';

export type INestedSubmission = Merge<ISubmission, {
  implementation_job: IJob;
  evaluation_job: IJob;
  submission_benchmark: IBenchmark;
}>;

interface IProps {
  submissions: INestedSubmission[];
}
interface IState {
  order: Order;
  orderBy: string;
}
export const getSubmissionsWithJobs = async (filters = {}) => {
  const submissions = await comicApi.submissions(filters);
  const nestedSubmissions: INestedSubmission[] = [];
  await Promise.all(
    submissions.map(async (submission) => {
      nestedSubmissions.push({
        ...submission,
        implementation_job: await comicApi.job(submission.implementation_job),
        evaluation_job: await comicApi.job(submission.evaluation_job),
        submission_benchmark: await comicApi.benchmark(submission.benchmark),
      });
    }),
  );
  return nestedSubmissions;
};

class Submissions extends React.Component<IProps, IState> {

  static async getInitialProps(ctx: NextContext): Promise<IProps> {
    return { submissions: await getSubmissionsWithJobs() };
  }

  public render() {

    return (
      <SubmissionsTable
        submissions={this.props.submissions} />
    );
  }
}

export default Submissions;
