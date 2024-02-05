import { Column, Entity } from 'typeorm';
import { CommonEntity } from '../../common/common.entity';

@Entity()
export class Certificate extends CommonEntity {
  @Column({ nullable: false })
  title: string;
  @Column({ nullable: false })
  webURL: string;
  @Column({ nullable: false })
  imageURL: string;
  @Column({ nullable: false })
  descEN: string;
  @Column({ nullable: false })
  descPT: string;
}
