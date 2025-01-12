import {
  IsString,
  IsInt,
  Min,
  IsEmail,
  IsStrongPassword,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly name: string;

  @IsInt()
  @Min(18)
  readonly age: number;

  @IsEmail()
  readonly email: string;

  @IsStrongPassword()
  readonly password: string;

  public constructor(
    name: string,
    age: number,
    email: string,
    password: string,
  ) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.password = password;
  }
}
