import { Injectable } from '@nestjs/common';
import { CreateJobOfferDto } from './dto/create-job-offer.dto';
import { UpdateJobOfferDto } from './dto/update-job-offer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { JobOffer } from './entities/job-offer.entity';
import { Repository } from 'typeorm';

@Injectable()
export class JobOfferService {
  constructor(
    @InjectRepository(JobOffer)
    private jobOfferRepository: Repository<JobOffer>,
  ) {}
  async create(createJobOfferDto: CreateJobOfferDto) {
    const imageData = Buffer.from(createJobOfferDto.image, 'base64');
    // createJobOfferDto.image = imageData.toString('base64');
    const res = this.jobOfferRepository.create({
      description: createJobOfferDto.description,
      isActive: true,
      image: imageData.toString('base64'),
      initDate: createJobOfferDto.initDate,
      endDate: createJobOfferDto.endDate,
    });
    const row = await this.jobOfferRepository.save(res);
    return row;
  }

  async findAll() {
    return await this.jobOfferRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} jobOffer`;
  }

  update(id: number, updateJobOfferDto: UpdateJobOfferDto) {
    return `This action updates a #${id} jobOffer`;
  }

  remove(id: number) {
    return `This action removes a #${id} jobOffer`;
  }
}
