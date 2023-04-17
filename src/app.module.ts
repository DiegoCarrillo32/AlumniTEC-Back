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
