import { IUser } from './user';
import { SerializedDate, UUID4, } from './utils';

export interface IDataFile {
  id: UUID4;
  created: SerializedDate;
  modified: SerializedDate;
  description: string;
  original_file_name: string;
  creator: IUser['id'];
  type: UUID4;
  frozen: boolean;
  file: string;
  sha: string;
}
