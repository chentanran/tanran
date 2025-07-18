import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Inject,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserLoginDto } from './dto/user-login.dto';
import { JwtService } from '@nestjs/jwt';
import { RequireLogin, RequirePermission } from 'src/custom-decorator';

@Controller('user')
export class UserController {
  @Inject(JwtService)
  private jwtService: JwtService;

  constructor(private readonly userService: UserService) {}

  @Get('init')
  async initData() {
    await this.userService.initData();
    return 'done';
  }

  @Post('login')
  async login(@Body() loginUser: UserLoginDto) {
    const user = await this.userService.login(loginUser);
    const token = this.jwtService.sign({
      username: user.username,
      roles: user.roles.map((role) => role.id),
    });
    return {
      token,
    };
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  @RequireLogin()
  @RequirePermission('查询 bbb')
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  @RequireLogin()
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  @RequireLogin()
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @RequireLogin()
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
