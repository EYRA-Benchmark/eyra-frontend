import { IUser } from './user';
import { SerializedDate, UUID4 } from './utils';

export interface IImplementation {
    id: UUID4;
    created: SerializedDate;
    modified: SerializedDate;
    description: string;
    name: string;
    creator: IUser['id'];
    image: string;
    version: string;
    command: string;
    algorithm: UUID4;
}
