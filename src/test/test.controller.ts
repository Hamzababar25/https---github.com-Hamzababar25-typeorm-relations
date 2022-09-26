import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Test } from '@nestjs/testing';



import { TestService } from './test.service';



export class CreatedTest {
  name: string;
 breeed:string;
 

}


@Controller('test')
export class testController {
  constructor(private readonly testService: TestService) {}

  @Get()
  async findAll(){
    return await this.testService.findAll();
  }

  @Post()
  async create(@Body() createdphoDto: CreatedTest) {
     return this.testService.createpho(createdphoDto)
  
  }
  @Get(':id')
async findOneBy(@Param('id') id: number): Promise<Test> {
  return this.testService.findOne(id);
}

@Delete(':id')
  async delete(@Param('id') id: number) {
    return this.testService.delete(id);
  }
  @Put(':id')
  async update(@Param('id') id: number,@Body()bd:any) {
    return this.testService.update({id,...bd});
  }

}
