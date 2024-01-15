import { Column } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

export class Project {
  @Column({ nullable: false, type: 'uuid' })
  id: string;
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
  @Column({ nullable: false, update: false, type: 'timestamp' }) createdAt: Date;
  @Column({ nullable: false, type: 'timestamp' }) updatedAt: Date;

  constructor(id: string = uuidv4(),
              title: string,
              repoURL: string,
              webURL: string,
              apiURL: string,
              imageURL: string,
              descEN: string,
              descPT: string,
              createdAt: Date = new Date(),
              updatedAt: Date = new Date()) {
    this.id = id;
    this.title = title;
    this.repoURL = repoURL;
    this.webURL = webURL;
    this.apiURL = apiURL;
    this.imageURL = imageURL;
    this.descEN = descEN;
    this.descPT = descPT;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
