import { UUID4 } from './utils';

export interface ISubmission {
  implementation_job: any;
  implementation: UUID4;
  benchmark: string;
  created: string;
  creator: number;
  evaluation_job: any;
  id: string;
  metrics_json: any;
  modified: string;
  name: string;
}
