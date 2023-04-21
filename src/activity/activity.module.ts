import { Module } from '@nestjs/common';
import { ActivityService } from './activity.service';
import { ActivityController } from './activity.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Activity } from './entities/activity.entity';
import { Alumnus } from 'src/alumni/entities/alumnus.entity';

@Module({
  controllers: [ActivityController],
  providers: [ActivityService],
  imports: [TypeOrmModule.forFeature([Activity, Alumnus])],
  exports: [TypeOrmModule, ActivityService],
})
export class ActivityModule {}
