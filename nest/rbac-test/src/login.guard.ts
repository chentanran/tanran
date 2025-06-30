import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { Role } from './user/entities/role.entity';
import { Reflector } from '@nestjs/core';

declare module 'express' {
  interface Request {
    user: {
      username: string;
      roles: Role[];
    };
  }
}

@Injectable()
export class LoginGuard implements CanActivate {
  @Inject()
  private reflector: Reflector;

  @Inject(JwtService)
  private jwtService: JwtService;

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request: Request = context.switchToHttp().getRequest();

    const requireLogin = this.reflector.getAllAndOverride<boolean>(
      'require-login',
      [context.getClass(), context.getHandler()],
    );

    if (!requireLogin) {
      return true;
    }

    const authorization = request.headers.authorization;

    if (!authorization) {
      throw new UnauthorizedException('用户未登录');
    }

    try {
      const token = authorization.split(' ')[1];
      // 定义一个接口来明确数据类型，避免使用 any
      interface JwtPayload {
        user: any; // 若知道 user 的具体类型，可替换 any 为具体类型
      }
      const data = this.jwtService.verify<JwtPayload>(token);
      // 由于 user 类型为 any，为避免不安全赋值，可使用类型断言确保类型安全
      // 定义一个扩展 Request 接口的新类型，添加 user 属性
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      request.user = data.user;
      return true;
    } catch {
      throw new UnauthorizedException('token 失效，请重新登录');
    }
  }
}
