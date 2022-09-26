import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PhotoModule } from './photo.module';
import { TestModule } from './test/test.module';

@Module({
  imports: [PhotoModule,TestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
