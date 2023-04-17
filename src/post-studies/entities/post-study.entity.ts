import { Alumnus } from 'src/alumni/entities/alumnus.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PostStudy {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
  @Column()
  institution: string;
  @Column()
  type: string;
  @Column()
  initDate: Date;
  @Column()
  endDate: Date;
  @Column()
  isActive: boolean;

  @ManyToOne(() => Alumnus, (alumni) => alumni.postStudy)
  alumni: Alumnus;
}
