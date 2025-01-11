import { Module } from '@nestjs/common';
import { AppController } from '../../interface/src/app.controller';
import { AppService } from '../../domain/src/app.service';
import { DatabaseModule } from './database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
