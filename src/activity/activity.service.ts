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
        id: In([
          '034bb003-4ce9-4a00-9621-fbac55a98de8',
          '06c87bc4-175d-4d00-a5b5-94e677bfd001',
        ]),
      },
    });
    const spec = this.activityRepo.create({
      activityName: 'test',
      isActive: true,
      alumni: res,
      activityDescription: 'test',
      activityPlace: 'test',
      endDate: new Date(),
      initDate: new Date(),
    });
    await this.activityRepo.save(spec);
    return res;
    return 'This action adds a new activity';
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
