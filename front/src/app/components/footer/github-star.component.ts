import {Component, OnDestroy, OnInit} from '@angular/core'
import {GitHub} from '../../models/content'
import {ContentService} from '../../services/content.service'
import {Subscription} from 'rxjs'

@Component({
  selector: 'app-github-star',
  template: `
    <a class="github-button" [href]="github?.url" target="_blank"
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
export class GithubStarComponent implements OnInit, OnDestroy {
  github?: GitHub
  githubSub?: Subscription
  setArialLabel = (github: GitHub | undefined): string => `Star ${github?.username}/${github?.repo_name} on GitHub`

  constructor(private contentService: ContentService) {
  }

  ngOnInit(): void {
    this.githubSub = this.contentService.getContent().subscribe({
      next: data => this.github = data.contact.github,
      error: error => console.error(error)
    })
  }

  ngOnDestroy(): void {
    this.githubSub?.unsubscribe()
  }
}
