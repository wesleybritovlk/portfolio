import { Column, CreateDateColumn, Entity, ObjectId, ObjectIdColumn, UpdateDateColumn } from 'typeorm';
import { HomeImage } from './home-image/home-image';
import { Social } from './social/social';
import { About } from './about/about';
import { Project } from './project/project';
import { Certificate } from './certificate/certificate';
import { Contact } from './contact/contact';

@Entity()
export class Content {
  @ObjectIdColumn() id: ObjectId;
  @Column((type) => HomeImage) homeImage: HomeImage;
  @Column((type) => Social) social: Social;
  @Column((type) => About) about: About;
  @Column((type) => Project) projects: Project[];
  @Column((type) => Certificate) certificates: Certificate[];
  @Column((type) => Contact) contact: Contact;
  @CreateDateColumn() createdAt: Date;
  @UpdateDateColumn() updatedAt: Date;

  constructor() {
  }
}
