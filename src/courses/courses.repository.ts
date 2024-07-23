import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class CoursesRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(data: CreateCourseDto) {
    return this.prismaService.course.create({ data });
  }

  findAll() {
    return this.prismaService.course.findMany();
  }

  findOne(id: number) {
    return this.prismaService.course.findUnique({ where: { id } });
  }

  update(id: number, data: UpdateCourseDto) {
    return this.prismaService.course.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prismaService.course.delete({
      where: { id },
    });
  }
}
