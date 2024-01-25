import { Column } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

export class Social {
  @Column((type) => SocialLink)
  links: SocialLink[];
  @Column({ nullable: false })
  email: string;

  constructor(links: SocialLink[], email: string) {
    this.links = links;
    this.email = email;
  }
}

export class SocialLink {
  @Column({ nullable: false, type: 'uuid' })
  id: string;
  @Column({ nullable: false })
  name: string;
  @Column({ nullable: false })
  url: string;
  @Column({ nullable: false, update: false, type: 'timestamp' }) createdAt: Date;
  @Column({ nullable: false, type: 'timestamp' }) updatedAt: Date;

  constructor(id: string = uuidv4(),
              name: string,
              url: string,
              createdAt: Date = new Date(),
              updatedAt: Date = new Date()) {
    this.id = id;
    this.name = name;
    this.url = url;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
