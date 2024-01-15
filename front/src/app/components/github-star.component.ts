import {Component} from '@angular/core'

@Component({
  selector: 'app-github-star',
  template: `
    <a class="github-button" [href]="'https://github.com/wesleybritovlk/portfolio'"
       data-color-scheme="no-preference: light; light: light; dark: dark;" data-icon="octicon-star" data-size="large"
       data-show-count="true" aria-label="Star wesleybritovlk/portfolio on GitHub">Star</a>
  `,
  styles: [`
    .github-button {
      display: flex;
      align-items: center;
    }
  `]
})
export class GithubStarComponent {
}
