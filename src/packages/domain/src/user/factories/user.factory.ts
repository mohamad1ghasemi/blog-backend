import { User } from '../user.entity';
import { UserId } from '../user.id';
import { CreateUserDto } from '../../../../shared/src/user/dto/user/user.dto';
import { IUser } from '../contracts/models/user.interface';

export class UserFactory {
  public async create(dto: CreateUserDto): Promise<IUser> {
    return new User(
      new UserId(),
      dto.name,
      dto.email,
      dto.password,
      new Date(),
      new Date(),
    );
  }
}
