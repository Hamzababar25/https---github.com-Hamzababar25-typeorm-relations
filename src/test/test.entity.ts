 import { Photo } from '../photo.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';

@Entity()
export class Test {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ length: 500 })
  name: string;

  @Column('text')
  breeed: string;

 @OneToOne(()=> Photo,photo=>photo.test)
 photo:Photo;
} 