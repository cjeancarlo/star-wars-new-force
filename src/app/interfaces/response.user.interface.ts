import { User } from './user.interface';

export interface ResonseUser {
    success: boolean;
    message: string;
    user?: User;
}
