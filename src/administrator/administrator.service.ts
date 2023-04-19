import { Injectable } from '@nestjs/common';
import { CreateAdministratorDto } from './dto/create-administrator.dto';
import { UpdateAdministratorDto } from './dto/update-administrator.dto';
import { Administrator } from './entities/administrator.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AdministratorService {
  constructor(
    @InjectRepository(Administrator)
    private readonly adminRepo: Repository<Administrator>,
  ) {
    // this.findOne('213', '213');
  }
  create(createAdministratorDto: CreateAdministratorDto) {
    return 'This action adds a new administrator';
  }

  async findAll() {
    const admins = await this.adminRepo.find();
    return admins;
  }

  async findOne(dni: string, password: string) {
    const admin = await this.adminRepo.findOneBy({ dni });
    if (!admin) {
      throw new Error('Password or email incorrect');
    }
    if (admin.password.trim() === password.trim()) {
      return admin;
    } else {
      throw new Error('Password or email incorrect');
    }
  }

  update(id: number, updateAdministratorDto: UpdateAdministratorDto) {
    return `This action updates a #${id} administrator`;
  }

  remove(id: number) {
    return `This action removes a #${id} administrator`;
  }
}
