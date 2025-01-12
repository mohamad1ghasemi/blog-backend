import { UserId } from '../../user.id';

export interface IUser {
  readonly id: UserId;
  readonly name: string;
  readonly email: string;
  readonly password: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
