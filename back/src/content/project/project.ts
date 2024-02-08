import { Column, Entity } from 'typeorm';
import { CommonEntity } from '../../common/common.entity';

@Entity()
export class Project extends CommonEntity {
  @Column({ nullable: false })
  title: string;
  @Column({ nullable: false })
  repoURL: string;
  @Column({ nullable: true })
  webURL: string;
  @Column({ nullable: true })
  apiURL: string;
  @Column({ nullable: false })
  imageURL: string;
  @Column({ nullable: false })
  descEN: string;
  @Column({ nullable: false })
  descPT: string;
}
