import { Alumnus } from 'src/alumni/entities/alumnus.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Service {
  @PrimaryGeneratedColumn('uuid')
  id: number;
  @Column()
  name: string;

  @Column()
  type: string;
  @Column()
  isActive: boolean;
  @ManyToOne(() => Alumnus, (alumni) => alumni.service)
  alumni: Alumnus;
}
