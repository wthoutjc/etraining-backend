import { Injectable } from '@nestjs/common';
import { CreateUserCourseDto } from './dto/create-user-course.dto';
import { UpdateUserCourseDto } from './dto/update-user-course.dto';
import { UserCourseRepository } from './user-course.repository';

@Injectable()
export class UserCourseService {
  constructor(private readonly userCourseRepository: UserCourseRepository) {}

  create(createUserCourseDto: CreateUserCourseDto) {
    return this.userCourseRepository.create(createUserCourseDto);
  }

  findAll() {
    return this.userCourseRepository.findAll();
  }

  findOne(id: number) {
    return this.userCourseRepository.findOne(id);
  }

  update(id: number, updateUserCourseDto: UpdateUserCourseDto) {
    return this.userCourseRepository.update(id, updateUserCourseDto);
  }

  remove(id: number) {
    return this.userCourseRepository.remove(id);
  }
}
