import { IsString, IsEmail, IsOptional, IsEnum, IsNumber } from 'class-validator';
import { Role } from '../../core/enums/role.enum';
import { Type } from 'class-transformer';

export class UserDto {
  @IsString()
  first_name: string;

  @IsString()
  last_name: string;

  @IsEmail()
  email: string;

  @IsString()
  phone: string;

  @IsOptional()
  @Type(() => Date)
  @IsString()
  verified_email_at?: Date;

  @IsEnum(Role)
  role: string;
}

export class CreateUserDto extends UserDto {
  @IsNumber()
  @Type(() => Number)
  course_id: number;
}
