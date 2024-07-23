import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Role } from 'src/core/enums/role.enum';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService, private usersService: UsersService) {}

  async validateUser(email: string) {
    const user = await this.usersService.findByEmail(email);
    if (!user || user.role.name === Role.Estudiante) {
      return null;
    }

    if (!user) {
      throw new BadRequestException('Usuario no encontrado');
    }

    return {
      id: user.id,
      email: user.email,
      firstName: user.first_name,
      lastName: user.last_name,
      role: user.role.name,
    };
  }

  async generateJWT(user) {
    const payload = { role: user.role, sub: user.id };

    return {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
      accessToken: this.jwtService.sign(payload),
    };
  }
}
