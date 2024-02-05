import { Column, Entity } from 'typeorm';
import { CommonEntity } from '../../common/common.entity';

@Entity()
export class HomeImage extends CommonEntity {
  @Column({ nullable: false })
  url: string;
  @Column({ nullable: false, length: 150 })
  altEN: string;
  @Column({ nullable: false, length: 150 })
  altPT: string;
}