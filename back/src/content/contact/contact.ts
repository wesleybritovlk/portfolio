import { Column } from 'typeorm';
import { GitHub } from './github/github';

export class Contact {
  @Column({ nullable: false })
  mobile: string;
  @Column({ nullable: false })
  waEN: string;
  @Column({ nullable: false })
  waPT: string;
  @Column({ nullable: false })
  resumeURL: string;
  @Column((type) => GitHub)
  github: GitHub;

  constructor(mobile: string, waEN: string, waPT: string, resumeURL: string, github: GitHub) {
    this.mobile = mobile;
    this.waEN = waEN;
    this.waPT = waPT;
    this.resumeURL = resumeURL;
    this.github = github;
  }
}
