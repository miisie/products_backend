import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
import { UserRole } from '../Commons/Enums';

@Entity({
    name: 'users'
})
export class UsersEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column({
    name: 'phone_number'
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

  @CreateDateColumn({
    name: 'created_at'
  })   
  createdAt: Date;
}