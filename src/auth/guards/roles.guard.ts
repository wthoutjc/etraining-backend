import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from '../../core/enums/role.enum';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>('roles', [context.getHandler(), context.getClass()]);
    if (!requiredRoles) {
      return true;
    }

    const { user } = context.switchToHttp().getRequest();

    const roleName = user.role;
    const roleId = this.getValueByKeyForNumberEnum(roleName);
    const resp = requiredRoles.some((role) => role === roleId);
    return resp;
  }

  getValueByKeyForNumberEnum(value: string) {
    return Object.entries(Role).find(([key]) => key === value)?.[1];
  }
}
