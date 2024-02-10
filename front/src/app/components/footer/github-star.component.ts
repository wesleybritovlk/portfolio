import {Component, OnDestroy, OnInit} from '@angular/core'
import {GitHub} from '../../models/content'
import {ContentService} from '../../services/content.service'
import {Subscription} from 'rxjs'
import {GithubService} from "../../services/github.service";

@Component({
  selector: 'app-github-star',
  template: `
    <button class="github-btn">
      <a class="btn-star" [href]="github?.url" target="_blank">
        <i class="star ri-star-line"></i>
        <span>Star</span>
      </a>
      <a class="btn-count" [href]="github?.url+'/stargazers'" target="_blank">
        {{ count }}
      </a>
    </button>
  `,
  styles: [`
    .github-btn {
      cursor: pointer;
      display: inline-flex;
      width: 5rem;
      height: 1.7rem;
      background: #161B22;
      justify-content: space-around;
      align-items: center;
      color: #C8C3BD;
      border: 1px solid #292F36;
      border-radius: 6px;
      transition: all .3s ease-in-out;

      .btn-star {
        display: flex;
        gap: 1px;
        align-items: center;
        color: #C8C3BD;
        transition: border-right-color .3s ease-in-out;


        .star {
          color: #727A84;
          font-size: var(--text-size-large);
          transition: color .3s ease-in-out;

        }
      }

      .btn-count {
        display: flex;
        align-items: center;
        padding: 0 4px;
        width: fit-content;
        height: 65%;
        border-radius: 100%;
        background: #30363D;
        color: #C8C3BD;
      }
    }

    .github-btn:hover {
      background: #30363D;
      border-color: #8B949E;


      .btn-star .star {
        color: #E5B84E;
      }
    }
  `]
})
export class GithubStarComponent implements OnInit, OnDestroy {
  github?: GitHub
  count: number = 0;
  contactSub?: Subscription
  githubSub?: Subscription

  constructor(private contentService: ContentService, private githubService: GithubService) {
  }

  ngOnInit(): void {
    this.contactSub = this.contentService.getContacts().subscribe({
      next: data => {
        this.github = data[0].github
        if (this.github) this.getGitHubStar(this.github);
      },
      error: error => console.error(error)
    })
  }

  getGitHubStar(github: GitHub) {
    let path = github.username + '/' + github.repo_name
    this.githubSub = this.githubService.getStarsByRepo(path, github.token)
      .subscribe({
        next: data => this.count = data.length,
        error: err => console.error(err)
      })
  }

  ngOnDestroy(): void {
    this.contactSub?.unsubscribe()
    this.githubSub?.unsubscribe()
  }
}
