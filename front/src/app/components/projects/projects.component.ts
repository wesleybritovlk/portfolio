import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core'
import {flexContainer} from '../../common/styles.common'
import {ContentService} from '../../services/content.service'
import {Certificate, Project} from '../../models/content'
import {SwiperOptions} from 'swiper'
import {Subscription} from 'rxjs'

@Component({
  selector: 'app-projects',
  encapsulation: ViewEncapsulation.None,
  template: `
    <section [ngStyle]="flexContainer()">
      <h2 class="projects-title">{{ 'my_projects' | translate }}</h2>
      <swiper class="swiper-container" [config]="configSwiper">
        <ng-container *ngFor="let project of projects; trackBy: trackByProjects">
          <ng-template swiperSlide>
            <app-card
              [title]="project.title"
              [repoUrl]="project.repo_url"
              [webUrl]="project.web_url"
              [apiUrl]="project.api_url"
              [imageUrl]="project.image_url"
              [description]="setDescByLang(project)"
            ></app-card>
          </ng-template>
        </ng-container>
      </swiper>
      <h2 class="projects-title">{{ 'my_certs' | translate }}</h2>
      <swiper class="swiper-container" [config]="configSwiper">
        <ng-container *ngFor="let cert of certificates; trackBy: trackByCerts">
          <ng-template swiperSlide>
            <app-card
              [isCert]="true"
              [title]="cert.title"
              [webUrl]="cert.web_url"
              [imageUrl]="cert.image_url"
              [description]="setDescByLang(cert)"
            />
          </ng-template>
        </ng-container>
      </swiper>
    </section>
  `,
  styleUrls: ['projects.component.css'],
  styles: [
    `@media (min-width: 360px) {
      .swiper-container {
        height: 200px;
      }
    }`,
    `@media (min-width: 600px) {
      .swiper-container {
        height: 225px;

        .swiper-button-prev, .swiper-button-next {
          font-weight: 400;
        }
      }
    }`,
    `@media (min-width: 820px) {
      .swiper-container {
        height: 250px;

        .swiper-button-prev, .swiper-button-next {
          font-weight: 900;
        }
      }
    }`,
    `@media (min-width: 1340px) {
      .swiper-container .swiper-wrapper.swiper-slide {
        padding-left: 2rem;
      }
    }`
  ]
})
export class ProjectsComponent implements OnInit, OnDestroy {
  protected readonly flexContainer = flexContainer
  projects: Project[] = []
  certificates: Certificate[] = []
  projectCertSub?: Subscription

  configSwiper: SwiperOptions = {
    virtual: true,
    navigation: true,
    pagination: true,
    speed: 500,
    breakpoints: {
      280: {slidesPerView: 1},
      600: {slidesPerView: 1.3},
      820: {slidesPerView: 1.8},
      1170: {slidesPerView: 2.6},
      1340: {slidesPerView: 3},
    }
  }

  trackByProjects = (index: number, project: Project): string => project.id

  trackByCerts = (index: number, cert: Certificate): string => cert.id

  setDescByLang(objectWithDesc: Project | Certificate) {
    let lang = document.documentElement.lang === 'en'
    return lang ? objectWithDesc?.desc_en ?? '' : objectWithDesc?.desc_pt ?? ''
  }

  constructor(private contentService: ContentService) {
  }

  ngOnInit(): void {
    this.projectCertSub = this.contentService.getContent().subscribe({
      next: data => {
        this.projects = data.projects
        this.certificates = data.certificates
      },
      error: error => console.error(error)
    })
  }

  ngOnDestroy(): void {
    this.projectCertSub?.unsubscribe()
  }
}
