import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Test } from './test/test.entity';

@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ length: 500 })
  name: string;

  @Column('text')
  description: string;

  @Column()
  filename: string;

  @Column('int')
  views: number;

  @Column()
  isPublished: boolean;

  @Column({nullable:true})
  testId: number;

  @OneToOne(()=>Test,test =>test.photo,{onDelete:"CASCADE"})
  @JoinColumn()
  test:Test; 
}