import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Inject(ConfigService)
  private configService: ConfigService;

  @Get()
  getHello() {
    return {
      // aaa: this.configService.get<string>('aaa'),
      // bbb: this.configService.get<string>('bbb'),
      // db: this.configService.get<string>('db'),
      config: this.configService.get<string>('aaa.bbb.ccc'),
    };
  }
}
