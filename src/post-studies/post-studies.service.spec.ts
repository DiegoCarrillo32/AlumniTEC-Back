import { Test, TestingModule } from '@nestjs/testing';
import { PostStudiesService } from './post-studies.service';

describe('PostStudiesService', () => {
  let service: PostStudiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostStudiesService],
    }).compile();

    service = module.get<PostStudiesService>(PostStudiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
