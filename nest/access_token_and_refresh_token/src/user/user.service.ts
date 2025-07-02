import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { LoginUserDto } from './dto/login-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  @InjectEntityManager()
  private entityManager: EntityManager;

  async initData() {
    const user1 = new User();
    user1.username = '张三';
    user1.password = '111111';

    const user2 = new User();
    user2.username = '李四';
    user2.password = '222222';

    await this.entityManager.save(User, [user1, user2]);
  }

  async findUserById(userId: number) {
    return await this.entityManager.findOne(User, {
      where: {
        id: userId,
      },
    });
  }

  async login(loginUser: LoginUserDto) {
    const user = await this.entityManager.findOne(User, {
      where: {
        username: loginUser.username,
      },
    });
    if (!user) {
      throw new HttpException('用户不存在', HttpStatus.OK);
    }
    if (user.password !== loginUser.password) {
      throw new HttpException('密码错误', HttpStatus.OK);
    }
    return user;
  }

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
