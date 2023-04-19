import { Injectable } from '@nestjs/common';
import { CreateAlumnusDto } from './dto/create-alumnus.dto';
import { UpdateAlumnusDto } from './dto/update-alumnus.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Alumnus } from './entities/alumnus.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AlumniService {
  constructor(
    @InjectRepository(Alumnus)
    private readonly alumniRepo: Repository<Alumnus>,
  ) {}
  create(createAlumnusDto: CreateAlumnusDto) {
    return 'This action adds a new alumnus';
  }

  async findAll(page: number, limit: number) {
    //fetch paginated alumnus
    const alumnus = await this.alumniRepo.find();
    // const alumnus = await this.alumniRepo.findAndCount({
    //   take: limit,
    //   skip: page * limit,
    // });

    return alumnus;
  }

  async findOne(id: string) {
    return await this.alumniRepo.findOne({
      where: { id },
      relations: {
        activity: true,
        specialization: true,
      },
    });
  }

  update(id: number, updateAlumnusDto: UpdateAlumnusDto) {
    return `This action updates a #${id} alumnus`;
  }

  remove(id: number) {
    return `This action removes a #${id} alumnus`;
  }
}
