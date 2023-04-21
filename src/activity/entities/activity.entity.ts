import { Alumnus } from 'src/alumni/entities/alumnus.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity({ name: 'Activity' })
export class Activity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  initDate: Date;

  @Column()
  endDate: Date;

  @Column()
  activityName: string;

  @Column()
  activityPlace: string;

  @Column()
  activityDescription: string;
  // @ManyToOne(() => Alumnus, (alumni) => alumni.activity)
  // alumni: Alumnus;
  @ManyToMany(() => Alumnus, (alumni) => alumni.activity)
  @JoinTable()
  alumni: Alumnus[];

  @Column({ default: true })
  isActive: boolean;
}
