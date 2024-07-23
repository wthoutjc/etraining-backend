import { IsString, IsEmail, IsOptional, IsEnum, IsPhoneNumber } from 'class-validator';
import { Role } from '../../core/enums/role.enum';

export class CreateUserDto {
  @IsString()
  first_name: string;

  @IsString()
  last_name: string;

  @IsEmail()
  email: string;

  @IsPhoneNumber(null)
  phone: string;

  @IsOptional()
  @IsString()
  verified_email_at?: Date;

  @IsEnum(Role)
  role: string;
}
