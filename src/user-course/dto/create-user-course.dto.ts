import { IsInt, IsOptional } from 'class-validator';

export class CreateUserCourseDto {
  @IsInt()
  user_id: number;

  @IsInt()
  course_id: number;

  @IsInt()
  inscription_status_id: number;

  @IsOptional()
  createdAt?: Date;

  @IsOptional()
  updatedAt?: Date;
}
