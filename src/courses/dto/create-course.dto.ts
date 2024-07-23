import { IsString, IsInt, IsOptional } from 'class-validator';

export class CreateCourseDto {
  @IsString()
  name: string;

  @IsInt()
  category_id: number;

  @IsInt()
  modality_id: number;

  @IsInt()
  duration: number;

  @IsInt()
  couta: number;

  @IsOptional()
  @IsString()
  createdAt?: Date;

  @IsOptional()
  @IsString()
  updatedAt?: Date;
}
