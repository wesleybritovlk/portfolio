import { Column, CreateDateColumn, Entity, ObjectId, ObjectIdColumn, UpdateDateColumn } from 'typeorm';
import { HomeImage } from './home-image/home-image';
import { Social } from './social/social';
import { About } from './about/about';

@Entity()
export class Content {
  @ObjectIdColumn() id: ObjectId;
  @Column((type) => HomeImage) homeImage: HomeImage;
  @Column((type) => Social) social: Social;
  @Column((type) => About) about: About;
  @CreateDateColumn() createdAt: Date;
  @UpdateDateColumn() updatedAt: Date;

  constructor() {
  }

  /*
  @Column() projects: Project[];
  @Column() certificates: Certificate[];
  @Column() contact: string;
  @Column() github: Github;
  */
}
