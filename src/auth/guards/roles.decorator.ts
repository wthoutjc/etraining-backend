import { SetMetadata } from '@nestjs/common';
import { Role } from '../../core/enums/role.enum';

export const HasRoles = (...roles: Role[]) => SetMetadata('roles', roles);
