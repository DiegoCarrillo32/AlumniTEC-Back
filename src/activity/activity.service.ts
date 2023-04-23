import { Injectable } from '@nestjs/common';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { Activity } from './entities/activity.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Alumnus } from 'src/alumni/entities/alumnus.entity';

@Injectable()
export class ActivityService {
  constructor(
    @InjectRepository(Activity)
    private readonly activityRepo: Repository<Activity>,
    @InjectRepository(Alumnus)
    private readonly alumniRepo: Repository<Alumnus>,
  ) {}
  async create(createActivityDto: CreateActivityDto) {
    const res = await this.alumniRepo.find({
      where: {
        id: In(createActivityDto.alumni),
      },
    });
    const spec = this.activityRepo.create({
      activityName: createActivityDto.activityName,
      isActive: true,
      alumni: res,
      activityDescription: createActivityDto.activityDescription,
      activityPlace: createActivityDto.activityPlace,
      endDate: createActivityDto.endDate,
      initDate: createActivityDto.initDate,
    });
    const act = await this.activityRepo.save(spec);
    return act;
  }

  async findAll() {
    const res = await this.activityRepo
      .createQueryBuilder('activity')
      .leftJoinAndSelect('activity.alumni', 'Alumnus')
      .getMany();
    return res;
    return `This action returns all activity`;
  }

  findOne(id: number) {
    return `This action returns a #${id} activity`;
  }

  update(id: number, updateActivityDto: UpdateActivityDto) {
    //recibir una lisa de ids si se quiere añadir
    // this.activityRepo
    //   .createQueryBuilder()
    //   .relation(Activity, 'alumni')
    //   .of(id)
    //   .add([]);
    return `This action updates a #${id} activity`;
  }

  remove(id: number) {
    return `This action removes a #${id} activity`;
  }
}
