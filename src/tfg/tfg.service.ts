import { Injectable } from '@nestjs/common';
import { CreateTfgDto } from './dto/create-tfg.dto';
import { UpdateTfgDto } from './dto/update-tfg.dto';

@Injectable()
export class TfgService {
  create(createTfgDto: CreateTfgDto) {
    return 'This action adds a new tfg';
  }

  findAll() {
    return `This action returns all tfg`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tfg`;
  }

  update(id: number, updateTfgDto: UpdateTfgDto) {
    return `This action updates a #${id} tfg`;
  }

  remove(id: number) {
    return `This action removes a #${id} tfg`;
  }
}
