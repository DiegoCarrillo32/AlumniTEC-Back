import { Test, TestingModule } from '@nestjs/testing';
import { PostStudiesController } from './post-studies.controller';
import { PostStudiesService } from './post-studies.service';

describe('PostStudiesController', () => {
  let controller: PostStudiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostStudiesController],
      providers: [PostStudiesService],
    }).compile();

    controller = module.get<PostStudiesController>(PostStudiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
