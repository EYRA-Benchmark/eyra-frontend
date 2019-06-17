import { SerializedDate, UUID4 } from './utils';
import { IUser } from './user';

export interface IBenchmark {
  id: UUID4;
  created: SerializedDate;
  modified: SerializedDate;
  short_description: string;
  description: string;
  name: string;
  card_image_url: string;
  banner_image_url: string;
  creator: IUser['id'];
  evaluator: UUID4;
  // training_data_file: UUID4;
  // training_ground_truth_data_file: UUID4;
  // test_data_file: UUID4;
  // test_ground_truth_data_file: UUID4;
  data_description: string;
  truth_description: string;
  metrics_description: string;
  data_set: UUID4;
  interface: UUID4;
  permissions: string[];
}
