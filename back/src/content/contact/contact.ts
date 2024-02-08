import { Column, Entity } from 'typeorm';
import { Github } from './github/github';
import { CommonEntity } from '../../common/common.entity';

@Entity()
export class Contact extends CommonEntity {
  @Column({ nullable: false })
  mobile: string;
  @Column({ nullable: false })
  waEN: string;
  @Column({ nullable: false })
  waPT: string;
  @Column({ nullable: false })
  resumeURL: string;
  @Column(() => Github)
  github: Github;
}
