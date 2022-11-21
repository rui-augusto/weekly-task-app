import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';

@Module({
  imports: [
    ConfigModule.forRoot({}),
    DatabaseModule,
    TaskModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
