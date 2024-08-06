import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

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

  @Column()
  phoneNumber: string;

  @Column()
  address: string;

  @Column({
    type: "enum",
    enum: UserRole,
    default: UserRole.GHOST,
})
  roles: string;

  @CreateDateColumn()
  createdAt: Date;
}