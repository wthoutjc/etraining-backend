import { IsString, IsInt, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateCourseDto {
  @IsString()
  name: string;

  @IsInt()
  @Type(() => Number)
  category_id: number;

  @IsInt()
  @Type(() => Number)
  modality_id: number;

  @IsInt()
  @Type(() => Number)
  duration: number;

  @IsInt()
  @Type(() => Number)
  couta: number;

  @IsOptional()
  @Type(() => Date)
  createdAt?: Date;

  @IsOptional()
  @Type(() => Date)
  updatedAt?: Date;
}
