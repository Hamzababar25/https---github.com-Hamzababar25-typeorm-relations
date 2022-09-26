import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { Photo } from './photo.entity';
import { PhotoService } from './photo.service';



export class CreatedPhotoDto {
  name: string;
  id: number;
  description: string;
  filename: string;
  views: number;
  isPublished: boolean;
  
 

}


@Controller('photo')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}

  @Get()
  async findAll(){
    return await this.photoService.findAll();
  }

  @Post()
  async create(@Body() createdphoDto: CreatedPhotoDto) {
     return this.photoService.createpho(createdphoDto)
  
  }
  @Get(':id')
async findOneBy(@Param('id') id: number): Promise<Photo> {
  return this.photoService.findOne(id);
}

@Delete(':id')
  async delete(@Param('id') id: number) {
    return this.photoService.delete(id);
  }
  @Put(':id')
  async update(@Param('id') id: number,@Body()bd:any) {
    return this.photoService.update({id,...bd});
  }

}
