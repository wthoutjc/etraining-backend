import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PrismaModule } from '../prisma/prisma.module';
import { CoursesModule } from './courses/courses.module';
import { UserCourseModule } from './user-course/user-course.module';

@Module({
  imports: [UsersModule, PrismaModule, CoursesModule, UserCourseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
