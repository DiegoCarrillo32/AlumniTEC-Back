import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AlumniService } from './alumni.service';
import { CreateAlumnusDto } from './dto/create-alumnus.dto';
import { UpdateAlumnusDto } from './dto/update-alumnus.dto';

@Controller('alumni')
export class AlumniController {
  constructor(private readonly alumniService: AlumniService) {}

  @Post()
  create(@Body() createAlumnusDto: CreateAlumnusDto) {
    return this.alumniService.create(createAlumnusDto);
  }

  @Get(':page/:limit/:search')
  findAll(
    @Param('page') page: number,
    @Param('limit') limit: number,
    @Param('search') search: string,
  ) {
    return this.alumniService.findAll(page, limit, search);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.alumniService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAlumnusDto: UpdateAlumnusDto) {
    return this.alumniService.update(+id, updateAlumnusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.alumniService.remove(+id);
  }

  @Get('filter/:career')
  findAllNamesAndId(@Param('career') career: string) {
    return this.alumniService.findAlumniNameAndId(career);
  }
}
