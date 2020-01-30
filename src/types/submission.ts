import { UUID4 } from './utils';

export interface ISubmission {
  algorithm_job: UUID4;
  algorithm: UUID4;
  benchmark: string;
  created: string;
  creator: number;
  evaluation_job: UUID4;
  id: string;
  metrics: any;
  modified: string;
  name: string;
  visualization_url: string;
}
