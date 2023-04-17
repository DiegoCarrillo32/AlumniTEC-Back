import { Module } from '@nestjs/common';
import { PostStudiesService } from './post-studies.service';
import { PostStudiesController } from './post-studies.controller';

@Module({
  controllers: [PostStudiesController],
  providers: [PostStudiesService]
})
export class PostStudiesModule {}
