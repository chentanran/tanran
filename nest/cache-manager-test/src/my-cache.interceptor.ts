import { CACHE_MANAGER } from '@nestjs/cache-manager';
import {
  CallHandler,
  ExecutionContext,
  Inject,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { RedisClientType } from 'redis';
import { of, tap } from 'rxjs';

@Injectable()
export class MyCacheInterceptor implements NestInterceptor {
  @Inject('REDIS_CLIENT')
  private redisClient: RedisClientType;

  @Inject(HttpAdapterHost)
  private httpAdapterHost: HttpAdapterHost;

  async intercept(context: ExecutionContext, next: CallHandler) {
    const request = context.switchToHttp().getRequest();

    const key: string = this.httpAdapterHost.httpAdapter.getRequestUrl(
      request,
    ) as string;

    const value: string | null = await this.redisClient.get(key);

    if (value === null) {
      return next.handle().pipe(
        tap((res: unknown) => {
          this.redisClient.set(key, JSON.stringify(res)).catch((err) => {
            console.error('Redis set error:', err);
          });
        }),
      );
    } else {
      try {
        return of(JSON.parse(value));
      } catch (err) {
        console.error('JSON parse error:', err);
        return next.handle();
      }
    }
  }
}
