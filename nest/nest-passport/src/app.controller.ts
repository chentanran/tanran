import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';
import { IsPublic } from './is-public.decorator';

interface JwtUserData {
  userId: number;
  username: string;
}

declare module 'express' {
  interface Request {
    user: JwtUserData;
  }
}

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly jwtService: JwtService,
  ) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  login(@Req() req: Request) {
    console.log(req.user);
    const token = this.jwtService.sign(
      {
        userId: req.user.userId,
        username: req.user.username,
      },
      {
        expiresIn: '1h',
      },
    );
    return {
      token,
    };
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('list')
  list(@Req() req: Request) {
    console.log(req.user);
    return ['111', '222', '333', '444', '555'];
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @IsPublic()
  @Get('aaa')
  aaa() {
    return 'aaa';
  }

  @Get('bbb')
  bbb() {
    return 'bbb';
  }
}
