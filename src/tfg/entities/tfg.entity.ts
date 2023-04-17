import { Alumnus } from 'src/alumni/entities/alumnus.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tfg {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  thesisName: string;
  @Column()
  gradDate: number;
  @Column()
  isActive: boolean;

  @OneToMany(() => Alumnus, (alumni) => alumni.tfg)
  alumni: Alumnus;
}
