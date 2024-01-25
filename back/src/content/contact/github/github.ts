import { Column } from 'typeorm';

export class GitHub {
  @Column({ nullable: false })
  username: string;
  @Column({ nullable: false })
  repoName: string;
  @Column({ nullable: false })
  url: string;

  constructor(username: string, repoName: string, url: string) {
    this.username = username;
    this.repoName = repoName;
    this.url = url;
  }
}
