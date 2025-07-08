import { Injectable } from '@nestjs/common';

const users = [
  {
    username: 'chentanran',
    githubId: '42716319',
    email: 'yyy@163.com',
    hobbies: ['sleep', 'writting'],
  },
  {
    username: 'dongdong',
    email: 'xxx@xx.com',
    hobbies: ['swimming'],
  },
];

@Injectable()
export class AppService {
  findUserByGithubId(githubId: string) {
    return users.find((user) => user.githubId === githubId);
  }
  getHello(): string {
    return 'Hello World!';
  }
}
