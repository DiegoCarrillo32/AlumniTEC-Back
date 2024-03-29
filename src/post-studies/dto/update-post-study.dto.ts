import { PartialType } from '@nestjs/mapped-types';
import { CreatePostStudyDto } from './create-post-study.dto';

export class UpdatePostStudyDto extends PartialType(CreatePostStudyDto) {
  name: string;
  institution: string;
  type: string;
  initDate: Date;
  endDate: Date;
}
