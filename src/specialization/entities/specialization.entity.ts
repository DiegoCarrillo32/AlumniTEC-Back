import { Alumnus } from 'src/alumni/entities/alumnus.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Specialization {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
  @Column()
  isActive: boolean;

  //@ManyToOne(() => Alumnus, (alumni) => alumni.specialization)
  @ManyToMany(() => Alumnus)
  @JoinTable()
  alumni: Alumnus[];
}
