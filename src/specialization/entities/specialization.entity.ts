import { Alumnus } from 'src/alumni/entities/alumnus.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Specialization {
  @PrimaryGeneratedColumn('uuid')
  id: number;
  @Column()
  name: string;
  @Column()
  isActive: boolean;

  @ManyToOne(() => Alumnus, (alumni) => alumni.specialization)
  alumni: Alumnus;
}
