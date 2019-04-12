import { IUser } from './user';
import { SerializedDate, UUID4 } from './utils';

export interface IAlgorithm {
  id: UUID4;
  created: SerializedDate;
  modified: SerializedDate;
  description: string;
  name: string;
  creator: IUser['id'];
  interface: UUID4;
  container: UUID4;
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
