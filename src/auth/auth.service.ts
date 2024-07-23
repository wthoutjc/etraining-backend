import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { RoleUserAuth, UserAuth } from './interfaces/user-auth';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService, private usersService: UsersService) {}

  async validateUser(email: string) {
    const user = await this.usersService.findByEmail(email);
    if (!user) return null;

    return {
      id: user.id,
      email: user.email,
      firstName: user.first_name,
      lastName: user.last_name,
      role: user.role.name,
    };
  }

  async generateJWT(user: RoleUserAuth & UserAuth) {
    const payload = { role: user.role, sub: user.id };

    return {
      id: user.id,
      email: user.email,
      firstName: user.first_name,
      lastName: user.last_name,
      role: user.role,
      accessToken: this.jwtService.sign(payload),
    };
  }
}
