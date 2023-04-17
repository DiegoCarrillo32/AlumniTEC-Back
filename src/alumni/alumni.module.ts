import { Module } from '@nestjs/common';
import { AlumniService } from './alumni.service';
import { AlumniController } from './alumni.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Alumnus } from './entities/alumnus.entity';

@Module({
  controllers: [AlumniController],
  providers: [AlumniService],
  imports: [TypeOrmModule.forFeature([Alumnus])],
  exports: [TypeOrmModule, AlumniService],
})
export class AlumniModule {}
