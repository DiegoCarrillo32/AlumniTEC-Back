import { Activity } from 'src/activity/entities/activity.entity';
import { PostStudy } from 'src/post-studies/entities/post-study.entity';
import { Service } from 'src/services/entities/service.entity';
import { Specialization } from 'src/specialization/entities/specialization.entity';
import { Tfg } from 'src/tfg/entities/tfg.entity';
import { WorkHistory } from 'src/work-history/entities/work-history.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Alumnus' })
export class Alumnus {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  carnet: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  company: string;

  @Column()
  jobTitle: string;

  @Column()
  career: string;

  @Column()
  linkedIn: string;

  @Column()
  enrollYear: number;

  @Column()
  gradYear: number;

  @Column()
  gradDate: Date;

  @Column({ default: true })
  isActive: boolean;

  @Column()
  image: string;

  @OneToMany(() => Tfg, (tfg) => tfg.alumni)
  tfg: Tfg[];

  @OneToMany(() => Activity, (activity) => activity.alumni)
  activity: Activity[];

  @OneToMany(() => Service, (service) => service.alumni)
  service: Service[];

  @OneToMany(() => PostStudy, (postStudy) => postStudy.alumni)
  postStudy: PostStudy[];

  @OneToMany(() => Specialization, (spec) => spec.alumni)
  specialization: Specialization[];

  @OneToMany(() => WorkHistory, (work) => work.alumni)
  workHistory: WorkHistory[];
}
