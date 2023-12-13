// create-user.dto.ts

import { IsString, IsBoolean } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly name: string;

  @IsBoolean()
  readonly isDoctor: boolean;
}
