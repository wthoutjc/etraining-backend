import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.strategy';
import { ConfigModule, ConfigType } from '@nestjs/config';
import configurations, { configRoot } from 'src/core/configurations/configurations';
import { LocalStrategy } from './strategies/local.strategy';
import { UsersService } from 'src/users/users.service';
import { UsersModule } from 'src/users/users.module';
import { UsersRepository } from 'src/users/users.repository';
import { UserCourseRepository } from 'src/user-course/user-course.repository';
import { UserCourseService } from 'src/user-course/user-course.service';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule.forRoot(configRoot())],
      inject: [configurations.KEY],
      useFactory(configEnvs: ConfigType<typeof configurations>) {
        return {
          secret: configEnvs.secretKey,
          signOptions: { expiresIn: configEnvs.jwtExpiresIn },
        };
      },
    }),
  ],
  providers: [
    AuthService,
    LocalStrategy,
    JwtStrategy,
    UsersService,
    UsersRepository,
    UserCourseRepository,
    UserCourseService,
  ],
  controllers: [AuthController],
})
export class AuthModule {}
