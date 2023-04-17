import { Alumnus } from 'src/alumni/entities/alumnus.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class WorkHistory {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  initDate: Date;

  @Column()
  endDate: Date;

  @Column()
  jobTitle: string;

  @Column()
  company: string;

  @Column()
  specialization: string;

  @Column()
  isActive: boolean;

  @ManyToOne(() => Alumnus, (alumni) => alumni.workHistory)
  alumni: Alumnus;
}
