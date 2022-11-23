import { ConfigModule, ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskModule } from './task/task.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'DB_HOST',
      port: Number('DB_PORT'),
      username: 'DB_USERNAME',
      password: 'DB_PASSWORD',
      database: 'DB_DATABASE',
      entities: [
        __dirname + '/../**/*.entity{.ts,.js}',
      ],
      synchronize: true,
    }),
    TaskModule,
  ],
})
export class AppModule {}
