import { UUID4 } from "./utils";

export interface IUser {
  email: string;
  first_name: string;
  last_name: string;
  username: string;
  groups: any[];
  id?: number;
}
export interface IResponse {
  token: UUID4;
}
