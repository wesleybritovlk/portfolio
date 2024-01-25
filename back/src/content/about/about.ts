import { Column } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

export class About {
  @Column({ nullable: false, length: 500 })
  descEN: string;
  @Column({ nullable: false, length: 500 })
  descPT: string;
  @Column((type) => Skill)
  skillls: Skill[];

  constructor(descEN: string, descPT: string, skillls: Skill[]) {
    this.descEN = descEN;
    this.descPT = descPT;
    this.skillls = skillls;
  }
}

export class Skill {
  @Column({ nullable: false, type: 'uuid' })
  id: string;
  @Column({ nullable: false, length: 50 })
  techName: string;
  @Column({ nullable: false, length: 100 })
  altEN: string;
  @Column({ nullable: false, length: 100 })
  altPT: string;
  @Column({ nullable: false, update: false, type: 'timestamp' }) createdAt: Date;
  @Column({ nullable: false, type: 'timestamp' }) updatedAt: Date;

  constructor(id: string = uuidv4(),
              techName: string,
              altEN: string,
              altPT: string,
              createdAt: Date = new Date(),
              updatedAt: Date = new Date()) {
    this.id = id;
    this.techName = techName;
    this.altEN = altEN;
    this.altPT = altPT;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}