import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PostStudiesService } from './post-studies.service';
import { CreatePostStudyDto } from './dto/create-post-study.dto';
import { UpdatePostStudyDto } from './dto/update-post-study.dto';

@Controller('post-studies')
export class PostStudiesController {
  constructor(private readonly postStudiesService: PostStudiesService) {}

  @Post()
  create(@Body() createPostStudyDto: CreatePostStudyDto) {
    return this.postStudiesService.create(createPostStudyDto);
  }

  @Get()
  findAll() {
    return this.postStudiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postStudiesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePostStudyDto: UpdatePostStudyDto,
  ) {
    return this.postStudiesService.update(id, updatePostStudyDto);
  }
  @Patch('active/:id')
  changeIsActive(
    @Param('id') id: string
  ) {
    return this.postStudiesService.changeIsActive(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postStudiesService.remove(+id);
  }
}
