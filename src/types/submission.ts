import { UUID4 } from './utils';

export interface ISubmission {
  id: string;
  creator: number;
  metrics: any;
  created: string;
  modified: string;
  name: string;
  is_private: boolean;
  visualization_url: string;
  image: string; //  from Implementation
  command: string; //  from Implementation
  version: string; //  from Implementation
  benchmark: string;
  algorithm_job: UUID4;
  evaluation_job: UUID4;
  algorithm: UUID4;
}
