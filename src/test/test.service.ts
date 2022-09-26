import { Injectable, Inject } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreatedTest } from './test.controller';

@Injectable()
export class TestService {
  constructor(
    @InjectRepository(Test)
    private testRepository: Repository<Test>,
  ) {}

  async createpho(createtest:CreatedTest): Promise<Test> {
    const createdpho = await this.testRepository.save(createtest);
    return createdpho;
  }

  async findAll(): Promise<Test[]> {
    return await this.testRepository.find();
  }
  async findOne(id: number): Promise<Test> {
    return this.testRepository.findOneBy({id});
  }
  async delete(id: number) {
    const deleteddoc = await this.testRepository.delete({id});
    return deleteddoc;
  }
  async update({id,name,breed}) {
    const updatepho = await this.testRepository.update(id,{name,breed });
    return await this.testRepository.findOneBy({id});
  }
}