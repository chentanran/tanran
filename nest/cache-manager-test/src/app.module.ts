import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CacheModule } from '@nestjs/cache-manager';
import { redisStore } from 'cache-manager-redis-store';

import { RedisClientOptions } from 'redis';

@Module({
  imports: [
    CacheModule.register<RedisClientOptions>({
      // @ts-ignore
      store: async () =>
        await redisStore({
          socket: {
            host: 'localhost',
            port: 6379,
          },
          password: '123456',
          database: 2,
        }),
      host: 'localhost',
      port: 6379,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
