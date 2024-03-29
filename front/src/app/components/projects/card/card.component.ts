import {Component, Input} from '@angular/core'

@Component({
  selector: 'app-card',
  template: `
    <article class="card-container" [ngStyle]="setBkgCard(imageUrl)">
      <div *ngIf="!isCert" class="project-modal">
        <div class="modal-title">
          <h4>{{ title }}</h4>
          <div class="title-links">
            <a target="_blank" [href]="repoUrl">
              <i class="project-links ri-github-fill"></i>
            </a>
            <a target="_blank" *ngIf="webUrl" [href]="webUrl">
              <i class="project-links ri-global-line"></i>
            </a>
            <a target="_blank" *ngIf="apiUrl" [href]="apiUrl">
              <i class="project-links ri-braces-fill"></i>
            </a>
          </div>
        </div>
        <p class="modal-desc">
          {{ description }}
        </p>
      </div>
      <div *ngIf="isCert" class="cert-modal">
        <div class="cert-title">
          <h4>{{ title }}</h4>
        </div>
        <a class="cert-link" target="_blank" [href]="webUrl">
          <i class="ri-external-link-line"></i>
        </a>
        <p class="cert-desc">
          {{ description }}
        </p>
      </div>
    </article>
  `,
  styleUrls: ['card.component.css'],
  styles: [
    `@media (min-width: 360px) {
      .card-container {
        width: 250px;
        height: 195px;
      }
    }`,
    `@media (min-width: 600px) {
      .card-container {
        width: 320px;
        height: 215px;
      }
    }`,
    `@media (min-width: 820px) {
      .card-container {
        width: 345px;
        height: 215px;
      }
    }`
  ],
})
export class CardComponent {
  @Input() isCert: boolean = false
  @Input() title: string = ''
  @Input() repoUrl: string = ''
  @Input() webUrl: string = ''
  @Input() apiUrl: string = ''
  @Input() imageUrl: string = ''
  @Input() description: string = ''

  setBkgCard = (imageUrl: string): Record<string, string> => ({
    backgroundImage: `url(${imageUrl})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  })
}
