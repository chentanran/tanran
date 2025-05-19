import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class RegisterUserDto {
  @IsString({ message: '用户名不能为空' })
  username: string;

  @IsNotEmpty({ message: '密码不能为空' })
  @MinLength(6, { message: '密码长度不能小于6位' })
  password: string;
}
