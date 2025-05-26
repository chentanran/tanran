import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleModule } from './article/article.module';
import { Article } from './article/entities/article.entity';
import { config } from 'dotenv'

config({ path: '.env' });

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: `${process.env.mysql_server_host}`,
      port: +`${process.env.mysql_server_port}`,
      username: `${process.env.mysql_server_username}`,
      password: `${process.env.mysql_server_password}`,
      database: `${process.env.mysql_server_database}`,
      entities: [Article],
      synchronize: false,
      logging: true,
      poolSize: 10,
      connectorPackage: 'mysql2',
      extra: {
        authPlugin: 'sha256_password',
      },
    }),
    ArticleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
