import { Module } from '@nestjs/common';
import { PostStudiesService } from './post-studies.service';
import { PostStudiesController } from './post-studies.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostStudy } from './entities/post-study.entity';
import { Alumnus } from 'src/alumni/entities/alumnus.entity';

@Module({
  controllers: [PostStudiesController],
  providers: [PostStudiesService],
  imports: [TypeOrmModule.forFeature([PostStudy, Alumnus])],
  exports: [TypeOrmModule, PostStudiesModule],
})
export class PostStudiesModule {}
