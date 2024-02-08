import { Column, Entity, ManyToOne } from 'typeorm';
import { Social } from '../social';
import { CommonEntity } from '../../../common/common.entity';

@Entity()
export class Link extends CommonEntity {
  @Column({ nullable: false })
  name: string;
  @Column({ nullable: false })
  url: string;
  @ManyToOne(() => Social, social => social.links,
    { onDelete: 'CASCADE' })
  social: Social;
}
