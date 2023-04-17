import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class JobOffer {
  @PrimaryGeneratedColumn('uuid')
  id: number;
  @Column()
  description: string;
  @Column()
  image: string;
  @Column()
  initDate: Date;
  @Column()
  endDate: Date;
  @Column()
  isActive: boolean;
}
