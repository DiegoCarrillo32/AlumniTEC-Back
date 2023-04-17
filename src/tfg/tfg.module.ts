import { Module } from '@nestjs/common';
import { TfgService } from './tfg.service';
import { TfgController } from './tfg.controller';

@Module({
  controllers: [TfgController],
  providers: [TfgService]
})
export class TfgModule {}
