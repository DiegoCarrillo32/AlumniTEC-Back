import { Injectable } from '@nestjs/common';
import { CreatePostStudyDto } from './dto/create-post-study.dto';
import { UpdatePostStudyDto } from './dto/update-post-study.dto';

@Injectable()
export class PostStudiesService {
  create(createPostStudyDto: CreatePostStudyDto) {
    return 'This action adds a new postStudy';
  }

  findAll() {
    return `This action returns all postStudies`;
  }

  findOne(id: number) {
    return `This action returns a #${id} postStudy`;
  }

  update(id: number, updatePostStudyDto: UpdatePostStudyDto) {
    return `This action updates a #${id} postStudy`;
  }

  remove(id: number) {
    return `This action removes a #${id} postStudy`;
  }
}
