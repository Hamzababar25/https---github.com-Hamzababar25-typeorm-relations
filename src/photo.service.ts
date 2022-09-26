
import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatedPhotoDto } from './photo.controller';
import { Photo } from './photo.entity';

@Injectable()
export class PhotoService {
  constructor(
    @InjectRepository(Photo)
    private photoRepository: Repository<Photo>,
  ) {}

  async createpho(createphoDto:CreatedPhotoDto): Promise<Photo> {
    const createdpho = await this.photoRepository.save(createphoDto);
    return createdpho;
  }

  async findAll(): Promise<Photo[]> {
    return await this.photoRepository.find();
  }
  async findOne(id: number): Promise<Photo> {
    return this.photoRepository.findOneBy({id});
  }
  async delete(id: number) {
    const deleteddoc = await this.photoRepository.delete({id});
    return deleteddoc;
  }
  async update({id,name,description,filename,views,isPublished}) {
    const updatepho = await this.photoRepository.update(id,{name,description,filename,views,isPublished });
    return await this.photoRepository.findOneBy({id});
  }
}