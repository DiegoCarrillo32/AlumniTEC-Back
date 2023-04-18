import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AlumniModule } from './alumni/alumni.module';
import { ActivityModule } from './activity/activity.module';
import { TfgModule } from './tfg/tfg.module';
import { WorkHistoryModule } from './work-history/work-history.module';
import { PostStudiesModule } from './post-studies/post-studies.module';
import { ServicesModule } from './services/services.module';
import { SpecializationModule } from './specialization/specialization.module';
import { JobOfferModule } from './job-offer/job-offer.module';
import { AdministratorModule } from './administrator/administrator.module';
import { Administrator } from './administrator/entities/administrator.entity';
import { Activity } from './activity/entities/activity.entity';
import { Alumnus } from './alumni/entities/alumnus.entity';
import { JobOffer } from './job-offer/entities/job-offer.entity';
import { PostStudy } from './post-studies/entities/post-study.entity';
import { Service } from './services/entities/service.entity';
import { Specialization } from './specialization/entities/specialization.entity';
import { Tfg } from './tfg/entities/tfg.entity';
import { WorkHistory } from './work-history/entities/work-history.entity';
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('HOST'),
        port: configService.get('PORT'),
        username: configService.get('POSTGRES_USER'),
        password: configService.get('POSTGRES_PASSWORD'),
        database: configService.get('POSTGRES_DB'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
        keepConnectionAlive: true,
        // entities: [
        //   Administrator,
        //   Activity,
        //   Alumnus,
        //   JobOffer,
        //   PostStudy,
        //   Service,
        //   Specialization,
        //   Tfg,
        //   WorkHistory,
        // ],
      }),
    }),
    AlumniModule,
    ActivityModule,
    TfgModule,
    WorkHistoryModule,
    PostStudiesModule,
    ServicesModule,
    SpecializationModule,
    JobOfferModule,
    AdministratorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
