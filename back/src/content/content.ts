import { Column, CreateDateColumn, Entity, ObjectId, ObjectIdColumn, UpdateDateColumn } from 'typeorm';
import { HomeImage } from './home-image/home-image';
import { Social } from './social/social';

@Entity()
export class Content {
  @ObjectIdColumn() id: ObjectId;
  @Column((type) => HomeImage) homeImage: HomeImage;
  @Column((type) => Social) social: Social;
  @CreateDateColumn() createdAt: Date;
  @UpdateDateColumn() updatedAt: Date;

  constructor() {
  }

  /*
  @Column() about: About;
  @Column() projects: Project[];
  @Column() certificates: Certificate[];
  @Column() contact: string;
  @Column() github: Github;
  */
}
