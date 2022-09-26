import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './config/config.service';
import { DatabaseModule } from './database.module';
import { PhotoController } from './photo.controller';
import { Photo } from './photo.entity';
import { photoProviders } from './photo.providers';
import { PhotoService } from './photo.service';


@Module({
  imports: [TypeOrmModule.forRoot(configService.getTypeOrmConfig()),TypeOrmModule.forFeature([Photo])],
  controllers: [PhotoController],
 
  providers: [
    PhotoService,
   
  ],

})
export class PhotoModule {}