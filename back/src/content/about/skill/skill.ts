import { Column, Entity, ManyToOne } from 'typeorm';
import { CommonEntity } from '../../../common/common.entity';
import { About } from '../about';

@Entity()
export class Skill extends CommonEntity {
  @Column({ nullable: false, length: 50 })
  techName: string;
  @Column({ nullable: false, length: 100 })
  altEN: string;
  @Column({ nullable: false, length: 100 })
  altPT: string;
  @ManyToOne(() => About, about => about.skills,
    { onDelete: 'CASCADE' })
  about: About;
}
