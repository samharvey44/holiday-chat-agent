import { IRole } from '../../interfaces';

export interface IUser {
    id: number;
    name: string;
    email: string;
    role: IRole;
}
