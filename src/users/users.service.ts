import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './users.repository';
import { UserCourseService } from 'src/user-course/user-course.service';
import { CreateUserCourseDto } from 'src/user-course/dto/create-user-course.dto';

@Injectable()
export class UsersService {
  constructor(
    private readonly userRepository: UsersRepository,
    private readonly userCourseService: UserCourseService
  ) {}

  async create(createUserDto: CreateUserDto) {
    const { course_id, ...data } = createUserDto;
    const user = await this.userRepository.create(data);
    const userCourse: CreateUserCourseDto = {
      course_id,
      inscription_status_id: 1,
      user_id: user.id,
    };
    return this.userCourseService.create(userCourse);
  }

  findAll() {
    return this.userRepository.findAll();
  }

  findOne(id: number) {
    return this.userRepository.findOne(id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(id, updateUserDto);
  }

  remove(id: number) {
    return this.userRepository.remove(id);
  }

  findByEmail(email: string) {
    return this.userRepository.findByEmail(email);
  }
}
