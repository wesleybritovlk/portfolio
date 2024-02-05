import { Column, Entity, OneToMany } from 'typeorm';
import { Link } from './link/link';
import { CommonEntity } from '../../common/common.entity';

@Entity()
export class Social extends CommonEntity {
  @OneToMany(() => Link, link => link.social)
  links: Link[];
  @Column({ nullable: false })
  email: string;
}
