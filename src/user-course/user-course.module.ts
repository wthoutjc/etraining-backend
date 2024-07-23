import { Module } from '@nestjs/common';
import { UserCourseService } from './user-course.service';
import { UserCourseController } from './user-course.controller';
import { UserCourseRepository } from './user-course.repository';

@Module({
  controllers: [UserCourseController],
  providers: [UserCourseService, UserCourseRepository],
})
export class UserCourseModule {}
