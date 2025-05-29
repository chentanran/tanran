import {
  Controller,
  Get,
  Inject,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CACHE_MANAGER, Cache, CacheInterceptor } from '@nestjs/cache-manager';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Inject(CACHE_MANAGER)
  private cacheManager: Cache;

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('set')
  async set(@Query('value') value: string) {
    await this.cacheManager.set('kkk', value);
    return 'done';
  }

  @Get('get')
  async get() {
    const value = await this.cacheManager.get('kkk');
    return value;
  }

  @Get('del')
  async del() {
    await this.cacheManager.del('kkk');
    return 'done';
  }

  @Get('aaa')
  @UseInterceptors(CacheInterceptor)
  aaa(@Query('a') a: string) {
    console.log('aaa', a);
    return 'aaa';
  }
}
