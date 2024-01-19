import {Component} from '@angular/core'
import {GitHub} from '../models/content'
import {ContentService} from '../services/content.service'

@Component({
  selector: 'app-github-star',
  template: `
    <a class="github-button" [href]="github?.url"
       data-color-scheme="no-preference: light; light: light; dark: dark;" data-icon="octicon-star" data-size="large"
       data-show-count="true" [attr.aria-label]="setArialLabel(github)">Star</a>
  `,
  styles: [`
    .github-button {
      display: flex;
      align-items: center;
    }
  `]
})
export class GithubStarComponent {
  github?: GitHub

  constructor(private contentService: ContentService) {
    this.contentService.getContent().subscribe({
      next: data => this.github = data.contact.github,
      error: error => console.error(error)
    })
  }

  setArialLabel = (github: GitHub | undefined): string => `Star ${github?.username}/${github?.repo_name} on GitHub`
}
