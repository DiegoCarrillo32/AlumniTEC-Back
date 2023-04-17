import { PartialType } from '@nestjs/mapped-types';
import { CreatePostStudyDto } from './create-post-study.dto';

export class UpdatePostStudyDto extends PartialType(CreatePostStudyDto) {}
