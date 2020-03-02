import { IUser } from './user';
import { SerializedDate, UUID4 } from './utils';

export interface IAlgorithm {
  id: UUID4;
  created: SerializedDate;
  modified: SerializedDate;
  description: string;
  name: string;
  creator: IUser['id'];
  admin_group: number;
  tags: string[];
  source_code_link: string;
  paper_link: string;
  permissions: string[];
  // interface: UUID4;    removed when merged with implementation
  // container: UUID4;    moved to submission as image
}

export interface IJob {
  id: UUID4;
  created: SerializedDate;
  modified: SerializedDate;
  status: number;
  started: SerializedDate;
  stopped: SerializedDate;
  log: string;
  implementation: UUID4;
  output: UUID4;
}
