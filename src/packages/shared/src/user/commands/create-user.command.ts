import { CreateUserDto } from '../dto/user/user.dto';

export class CreateUserCommand {
  public constructor(public readonly dto: CreateUserDto) {}
}
