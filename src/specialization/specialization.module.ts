import { Module } from '@nestjs/common';
import { SpecializationService } from './specialization.service';
import { SpecializationController } from './specialization.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Specialization } from './entities/specialization.entity';
import { Alumnus } from 'src/alumni/entities/alumnus.entity';

@Module({
  controllers: [SpecializationController],
  providers: [SpecializationService],
  imports: [TypeOrmModule.forFeature([Specialization, Alumnus])],
  exports: [TypeOrmModule, SpecializationService],
})
export class SpecializationModule {}
