import { Module } from '@nestjs/common';
import { AdministratorService } from './administrator.service';
import { AdministratorController } from './administrator.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Administrator } from './entities/administrator.entity';

@Module({
  controllers: [AdministratorController],
  providers: [AdministratorService],
  imports: [TypeOrmModule.forFeature([Administrator])],
  exports: [TypeOrmModule, AdministratorService],
})
export class AdministratorModule {}
