import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Administrator' })
export class Administrator {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  dni: string;

  @Column()
  password: string;

  @Column()
  isActive: boolean;
}
