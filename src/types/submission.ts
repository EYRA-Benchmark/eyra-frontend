import { UUID4 } from './utils';

export interface ISubmission {
  algorithm_job: any;
  algorithm: UUID4;
  benchmark: string;
  created: string;
  creator: number;
  evaluation_job: any;
  id: string;
  metrics_json: any;
  modified: string;
  name: string;
}