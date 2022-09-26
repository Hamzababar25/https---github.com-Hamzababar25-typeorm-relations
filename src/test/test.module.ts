import { Module } from "@nestjs/common";

import { TypeOrmModule } from "@nestjs/typeorm";
import { configService } from "../config/config.service";
import { testController } from "./test.controller";
import { Test } from "./test.entity";
import { TestService } from "./test.service";

@Module({
    imports: [TypeOrmModule.forRoot(configService.getTypeOrmConfig()),TypeOrmModule.forFeature([Test])],
    controllers: [testController],
   
    providers: [
      TestService,
     
    ],
  
  })
  export class TestModule {}