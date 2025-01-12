import { HttpException, HttpStatus } from '@nestjs/common';

export class NotFoundUserException extends HttpException {
  constructor() {
    super('User not found', HttpStatus.NOT_FOUND);
  }
}
