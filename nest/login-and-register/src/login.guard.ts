import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';
import { Request } from 'express';

interface JwtPayload {
  user: {
    id: string;
    username: string;
    // Add other user properties as needed
  };
}

@Injectable()
export class LoginGuard implements CanActivate {
  @Inject(JwtService)
  private jwtService: JwtService;
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context
      .switchToHttp()
      .getRequest<Request & { user?: JwtPayload['user'] }>();
    const authorization = request.headers['authorization'] || '';
    const bearer = authorization.split(' ');
    if (!bearer || bearer.length < 2) {
      throw new UnauthorizedException('登录token错误');
    }

    const token = bearer[1];

    try {
      const info = this.jwtService.verify<JwtPayload>(token);
      request.user = info.user; // 将用户信息存储到请求对象中
      return true;
    } catch {
      throw new UnauthorizedException('登录token失败，请重新登录');
    }
  }
}
