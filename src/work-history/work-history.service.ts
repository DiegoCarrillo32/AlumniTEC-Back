import { Injectable } from '@nestjs/common';
import { CreateWorkHistoryDto } from './dto/create-work-history.dto';
import { UpdateWorkHistoryDto } from './dto/update-work-history.dto';

@Injectable()
export class WorkHistoryService {
  create(createWorkHistoryDto: CreateWorkHistoryDto) {
    return 'This action adds a new workHistory';
  }

  findAll() {
    return `This action returns all workHistory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} workHistory`;
  }

  update(id: number, updateWorkHistoryDto: UpdateWorkHistoryDto) {
    return `This action updates a #${id} workHistory`;
  }

  remove(id: number) {
    return `This action removes a #${id} workHistory`;
  }
}
