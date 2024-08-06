import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User extends Base {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

}