import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Administrator {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  dni: string;

  @Column()
  career: string;

  @Column()
  password: string;

  @Column()
  isActive: boolean;
}
