import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UsersRepository } from './users.repository';
import { UserCourseService } from 'src/user-course/user-course.service';
import { UserCourseRepository } from 'src/user-course/user-course.repository';

@Module({
  controllers: [UsersController],
  providers: [UsersService, UsersRepository, UserCourseService, UserCourseRepository],
})
export class UsersModule {}
