import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User ex {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

}