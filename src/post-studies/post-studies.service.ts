import { Injectable } from '@nestjs/common';
import { CreatePostStudyDto } from './dto/create-post-study.dto';
import { UpdatePostStudyDto } from './dto/update-post-study.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PostStudy } from './entities/post-study.entity';
import { Repository } from 'typeorm';
import { Alumnus } from 'src/alumni/entities/alumnus.entity';

@Injectable()
export class PostStudiesService {
  constructor(
    @InjectRepository(PostStudy)
    private readonly postStudyRepo: Repository<PostStudy>,
    @InjectRepository(Alumnus)
    private readonly alumniRepo: Repository<Alumnus>,
  ) {}
  async create(createPostStudyDto: CreatePostStudyDto) {
    const alumni = await this.alumniRepo.findOne({
      where: { id: createPostStudyDto.alumniId },
    });
    if (alumni) {
      const postStudy = await this.postStudyRepo.create({
        ...createPostStudyDto,
        alumni,
      });
      await this.postStudyRepo.save(postStudy);
      return postStudy;
    }
    return null;
  }

  findAll() {
    return `This action returns all postStudies`;
  }

  findOne(id: number) {
    return `This action returns a #${id} postStudy`;
  }

  async update(id: string, updatePostStudyDto: UpdatePostStudyDto) {
    console.log(id)
    const postStudy = await this.postStudyRepo.findOne({
      where: { id },
    });
    console.log(postStudy, 'texto');
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
