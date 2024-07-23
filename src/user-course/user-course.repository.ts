import { Injectable } from '@nestjs/common';
import { CreateUserCourseDto } from './dto/create-user-course.dto';
import { UpdateUserCourseDto } from './dto/update-user-course.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class UserCourseRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(data: CreateUserCourseDto) {
    return this.prismaService.userCourse.create({ data });
  }

  findAll() {
    return this.prismaService.userCourse.findMany();
  }

  findOne(id: number) {
    return this.prismaService.userCourse.findUnique({ where: { id } });
  }

  update(id: number, data: UpdateUserCourseDto) {
    return this.prismaService.userCourse.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prismaService.userCourse.delete({
      where: { id },
    });
  }
}
