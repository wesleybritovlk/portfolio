import { Column } from 'typeorm';

export class HomeImage {
  @Column({ nullable: false })
  url: string;

  @Column({ nullable: false })
  altEN: string;

  @Column({ nullable: false })
  altPT: string;

  constructor(url: string, altEN: string, altPT: string) {
    this.url = url;
    this.altEN = altEN;
    this.altPT = altPT;
  }
}