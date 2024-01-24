import {Component, OnDestroy, OnInit} from '@angular/core'
import {commonIcon} from '../../common/styles.common'
import {Social, SocialLink} from '../../models/content'
import {ContentService} from '../../services/content.service'
import {Subscription} from 'rxjs'

@Component({
  selector: 'app-social',
  template: `
    <div class="social-container">
      <div class="social-links">
        <a target="_blank" *ngFor="let link of social?.links; trackBy: trackByItems" [href]="link.url">
          <i [ngStyle]="commonIcon()" [ngClass]="getIconByLink(link)"></i>
        </a>
      </div>
      <div class="social-email">
        <a target="_blank" [href]="'mailto:'+social?.email">
          <label>{{ social?.email }}</label>
        </a>
      </div>
    </div>
  `,
  styleUrls: ['social.component.css'],
  styles: [`@media (min-width: 820px) {
    .social-container {
      position: fixed;
      width: 100%;
      display: flex;
      justify-content: space-between;

      .social-links, .social-email {
        z-index: -1;
        position: absolute;
        margin-bottom: 0;
        transform: rotate(90deg);
        display: flex;
        align-items: center;
        width: 25rem;
        top: -7.2rem;
      }

      .social-links:after, .social-email:after {
        content: "";
        display: flex;
        flex-flow: row nowrap;
        margin-left: 15px;
        border-bottom: var(--text-color) 2px solid;
        width: 100%;
      }

      .social-links {
        left: -8.5rem;

        & a i {
          padding: 0 24px;
          transform: rotate(-90deg);
        }
      }

      .social-email {
        right: -8.5rem;
        font-size: var(--text-size);
      }
    }
  }`]
})
export class SocialComponent implements OnInit, OnDestroy {
  protected readonly commonIcon = commonIcon
  social?: Social
  socialSub?: Subscription

  trackByItems = (index: number, link: SocialLink): string => link.id
  getIconByLink = (link: SocialLink) => `ri-${link.name}-line`

  constructor(private contentService: ContentService) {
  }

  ngOnInit(): void {
    this.socialSub = this.contentService.getContent().subscribe({
      next: data => this.social = data.social,
      error: error => console.error(error)
    })
  }

  ngOnDestroy(): void {
    this.socialSub?.unsubscribe()
  }
}
