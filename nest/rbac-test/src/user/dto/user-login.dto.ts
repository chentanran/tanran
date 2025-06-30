import { IsNotEmpty, Length } from 'class-validator';

export class UserLoginDto {
  @IsNotEmpty({ message: '用户名不能为空' })
  @Length(1, 50, { message: '用户名长度需在1到50之间' })
  username: string;

  @IsNotEmpty({ message: '密码不能为空' })
  @Length(1, 50, { message: '密码长度需在1到50之间' })
  password: string;
}
