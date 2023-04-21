import { Injectable } from '@nestjs/common';
import { CreateSpecializationDto } from './dto/create-specialization.dto';
import { UpdateSpecializationDto } from './dto/update-specialization.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Specialization } from './entities/specialization.entity';
import { Alumnus } from 'src/alumni/entities/alumnus.entity';

@Injectable()
export class SpecializationService {
  constructor(
    @InjectRepository(Specialization)
    private readonly specRepo: Repository<Specialization>,
    @InjectRepository(Alumnus)
    private readonly alumniRepo: Repository<Alumnus>,
  ) {}
  async create(createSpecializationDto: CreateSpecializationDto) {
    // const res = await this.alumniRepo.find({
    //   where: {
    //     id: In([
    //       '034bb003-4ce9-4a00-9621-fbac55a98de8',
    //       '06c87bc4-175d-4d00-a5b5-94e677bfd001',
    //     ]),
    //   },
    // });
    const spec = this.specRepo.create({
      name: createSpecializationDto.name,
      isActive: true,
    });
    await this.specRepo.save(spec);
    console.log(spec);
    return spec;
  }

  async findAll() {
    const res = await this.specRepo.find();
    return res;
    // const res = await this.specRepo
    //   .createQueryBuilder('specialization')
    //   .leftJoinAndSelect('specialization.alumni', 'Alumnus')
    //   .getMany();
    // return res;
  }

  findOne(id: number) {
    return `This action returns a #${id} specialization`;
  }

  async update(id: string, updateSpecializationDto: UpdateSpecializationDto) {
    const spec = await this.specRepo.findOne({
      where: {
        id,
      },
    });
    spec.name = updateSpecializationDto.name;
    return await this.specRepo.save(spec);
  }

  async remove(id: string) {
    const res = await this.specRepo.findOne({
      where: {
        id,
      },
    });

    if (res) {
      res.isActive = !res.isActive;
      await this.specRepo.save(res);
      return res;
    }
    return null;
  }
}
