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
  public_test_data_description: string;
  public_test_data_sampling_method: string;
  private_test_data_description: string;
  private_test_data_sampling_method: string;
  participant_data_description: string;
  participant_data_sampling_method: string;

  // Other datasets
  related_datasets: UUID4[];

  // Data files
  public_test_data_file: UUID4;
  public_ground_truth_data_file: UUID4;
  private_test_data_file: UUID4;
  private_ground_truth_data_file: UUID4;
  participant_data_files: UUID4[];

}
