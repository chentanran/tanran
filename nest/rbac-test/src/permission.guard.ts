import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { Permission } from './user/entities/permission.entity';
// import { Role } from './user/entities/role.entity'; // 假设存在 Role 实体定义
import { UserService } from './user/user.service';

@Injectable()
export class PermissionGuard implements CanActivate {
  @Inject(UserService)
  private userService: UserService;

  @Inject(Reflector)
  private reflector: Reflector;

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request: Request = context.switchToHttp().getRequest();

    if (!request.user || !('roles' in request.user)) {
      return true;
    }

    // 定义角色 ID 类型
    type RoleIdOrObject = number | { id: number };

    // 类型守卫
    const isRoleId = (role: RoleIdOrObject): role is number =>
      typeof role === 'number';
    const isRoleObject = (role: RoleIdOrObject): role is { id: number } =>
      typeof role === 'object' && 'id' in role;

    // 提取角色 ID
    const roleIds: number[] = request.user.roles
      .map((role: RoleIdOrObject) => {
        if (isRoleId(role)) {
          return role;
        } else if (isRoleObject(role)) {
          return role.id;
        }
        return null;
      })
      .filter((id): id is number => id !== null);

    const roles = await this.userService.findRolesByIds(roleIds);

    const permissions: Permission[] = roles.reduce(
      (total: Permission[], current) => {
        total.push(...current.permissions);
        return total;
      },
      [] as Permission[],
    );

    const requiredPermissions = this.reflector.getAllAndOverride<string[]>(
      'require-permission',
      [context.getClass(), context.getHandler()],
    );

    if (!requiredPermissions) {
      return true; // 没有设置权限要求时放行
    }

    console.log('requiredPermissions', requiredPermissions);

    for (const curPermission of requiredPermissions) {
      const found = permissions.find((item) => item.name === curPermission);
      if (!found) {
        throw new UnauthorizedException('您没有访问该接口的权限');
      }
    }

    return true;
  }
}
