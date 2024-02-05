import { Column, Entity, OneToMany } from 'typeorm';
import { Skill } from './skill/skill';
import { CommonEntity } from '../../common/common.entity';

@Entity()
export class About extends CommonEntity {
  @Column({ nullable: false, length: 500 })
  descEN: string;
  @Column({ nullable: false, length: 500 })
  descPT: string;
  @OneToMany(() => Skill, skill => skill.about)
  skills: Skill[];
}
