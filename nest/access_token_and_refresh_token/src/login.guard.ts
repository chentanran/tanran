import { JwtService } from '@nestjs/jwt';
import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';

// 定义 JWT 解析后的数据结构
interface JwtPayload {
  userId: number;
  username: string;
  // 可根据实际 payload 添加更多字段
}

@Injectable()
export class LoginGuard implements CanActivate {
  @Inject(JwtService)
  private jwtService: JwtService;

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request: Request = context.switchToHttp().getRequest();

    const authorization = request.headers.authorization;

    if (!authorization) {
      throw new UnauthorizedException('用户未登录');
    }

    try {
      const token = authorization.split(' ')[1];
      const data: JwtPayload = this.jwtService.verify(token);
      console.log(data);
      return true;
    } catch {
      throw new UnauthorizedException('token 失效，请重新登录');
    }
  }
}
