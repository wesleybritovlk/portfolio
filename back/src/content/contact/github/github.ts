import { Column } from 'typeorm';

export class Github {
  @Column({ nullable: false })
  username: string;
  @Column({ nullable: false })
  repoName: string;
  @Column({ nullable: false })
  url: string;
}
