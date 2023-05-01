import { Injectable } from '@nestjs/common';
import { CreatePostStudyDto } from './dto/create-post-study.dto';
import { UpdatePostStudyDto } from './dto/update-post-study.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PostStudy } from './entities/post-study.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostStudiesService {
  constructor(
    @InjectRepository(PostStudy)
    private readonly postStudyRepo: Repository<PostStudy>,
  ) {}
  create(createPostStudyDto: CreatePostStudyDto) {
    return 'This action adds a new postStudy';
  }

  findAll() {
    return `This action returns all postStudies`;
  }

  findOne(id: number) {
    return `This action returns a #${id} postStudy`;
  }

  async update(id: string, updatePostStudyDto: UpdatePostStudyDto) {
    const postStudy = await this.postStudyRepo.findOne({
      where: { id },
    });
    if (postStudy) {
      const res = await this.postStudyRepo.update(id, updatePostStudyDto);
      return res;
      // update postStudy
    }

    return null;
  }

  remove(id: number) {
    return `This action removes a #${id} postStudy`;
  }
}
