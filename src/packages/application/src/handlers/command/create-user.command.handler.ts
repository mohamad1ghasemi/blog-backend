import { UserFactory } from '../../../../domain/src/user/factories/user.factory';
import { CreateUserCommand } from '../../../../shared/src/user/commands/create-user.command';
import { IdResponseDto } from '../../../../shared/src/utils/id.response.dto';

export class CreateUserCommandHandler {
  public constructor(private readonly userFactory: UserFactory) {
    super(CreateUserCommand);
  }

  protected async execute(command: CreateTagCommand): Promise<IdResponseDto> {
    const user = await this.userFactory.create(command.dto);

    await this.users.add(user);

    return this.mapper.map(user.id);
  }
}
