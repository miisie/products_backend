import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: 'products'
})
export class ProductEntity{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string

  @Column()
  description: string

  @Column()
  type: string

  @Column({
    type: 'json'
  })
  thumbnails: string[];

  @Column()
  price: string


  @CreateDateColumn({
    name: 'created_at',
  })
  createdAt: Date;

}