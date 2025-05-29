import { Controller, Get, Inject, Res, Session, Headers } from '@nestjs/common';
import { AppService } from './app.service';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Inject(JwtService)
  private readonly jwtService: JwtService;

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('sss')
  sss(@Session() session: Record<string, any>): number {
    console.log(session);
    session.count = typeof session.count === 'number' ? session.count + 1 : 1;
    return session.count as number;
  }

  // @Get('ttt')
  // ttt(@Res({ passthrough: true }) response: Response): string {
  //   const newToken = this.jwtService.sign({ count: 1 });
  //   response.setHeader('token', newToken);
  //   return '111111';
  // }

  @Get('ttt')
  ttt(
    @Headers('authorization') authorization: string,
    @Res({ passthrough: true }) response: Response,
  ): string | number | void {
    if (authorization) {
      try {
        const token = authorization.split(' ')[1]; // Assuming Bearer token format
        const data: { count: number } = this.jwtService.verify<{
          count: number;
        }>(token);
        const newToken = this.jwtService.sign({ count: data.count + 1 });
        response.setHeader('token', newToken);
        return data.count + 1;
      } catch (error) {
        console.error('JWT verification failed:', error);
      }
    } else {
      const newToken = this.jwtService.sign({ count: 1 });
      response.setHeader('token', newToken);
      return 1;
    }
  }
}
