import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class JobOffer {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  description: string;
  @Column('bytea')
  image: string;
  @Column()
  initDate: Date;
  @Column()
  endDate: Date;
  @Column()
  isActive: boolean;
}
