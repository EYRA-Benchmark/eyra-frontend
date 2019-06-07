import { SerializedDate, UUID4 } from './utils';
import { IUser } from './user';

export interface IDataset {
  // System requirements
  id: UUID4;
  creator: IUser['id'];
  permissions: string[];
  version: string;
  created: SerializedDate;
  modified: SerializedDate;

  // Display requirements
  name: string;
  short_description: string;
  long_description: string;
  card_image_url: string;
  card_image_alttext: string;
  banner_image_url: string;
  banner_image_alttext: string;

  // Other datasets
  related_datasets: UUID4[];

  // Data files
  additional_data_files: UUID4[];
  test_data_file: UUID4;
  test_ground_truth_data_file: UUID4;
}
