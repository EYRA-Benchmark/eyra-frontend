import { UUID4 } from './utils';

export interface ISubmission {
  implementation_job: UUID4;
  implementation: UUID4;
  benchmark: string;
  created: string;
  creator: number;
  evaluation_job: UUID4;
  id: string;
  metrics: any;
  modified: string;
  name: string;
}
