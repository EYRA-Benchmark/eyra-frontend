import { IUser } from './user';
import { SerializedDate, UUID4 } from './utils';

export interface IDataFile {
  // System requirements
  id: UUID4;
  creator: IUser['id'];
  // permissions: string[];
  // version: string;
  created: SerializedDate;
  modified: SerializedDate;
  file: string;
  sha: string;

  // Display requirements
  name: string;
  short_description: string;
  long_description: string;
  type: UUID4;
  format: string;
  size: string;
}
