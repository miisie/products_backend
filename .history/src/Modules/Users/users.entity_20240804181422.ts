import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
import { UserRole } from '../Commons/Enums';

@Entity({
    name: 'users'
})
export class UserEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column({
    name
  })
  phoneNumber: string;

  @Column()
  address: string;

  @Column({
    type: "enum",
    enum: UserRole,
    default: UserRole.USER,
  })
  roles: string;

  @CreateDateColumn()   
  createdAt: Date;
}