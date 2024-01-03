import {Component} from '@angular/core'
import {flexContainer} from '../../common/styles.common'

@Component({
  selector: 'app-projects',
  template: `
    <section [ngStyle]="flexContainer()">
      <h2>My Projects</h2>
      <swiper-container class="swiper"
                        slides-per-view="3"
                        pagination="true"
                        navigation="true"
                        centered-slides="true"
      >
        <swiper-slide>
          <app-card/>
        </swiper-slide>
        <swiper-slide>
          <app-card/>
        </swiper-slide>
        <swiper-slide>
          <app-card/>
        </swiper-slide>
        <swiper-slide>
          <app-card/>
        </swiper-slide>
      </swiper-container>
      <h2>My Certificates</h2>
      <swiper-container class="swiper"
                        pagination="true"
                        navigation="true"
      >
        <swiper-slide>
          <app-card/>
        </swiper-slide>
        <swiper-slide>
          <app-card/>
        </swiper-slide>
        <swiper-slide>
          <app-card/>
        </swiper-slide>
      </swiper-container>
    </section>
  `,
  styles: [`
    h2 {
      margin: 15px 5px;
      font-size: var(--title-size);
      color: var(--text-color);
    }

    .swiper {
      position: relative;
      width: 100%;
      height: 175px;
      border-radius: 25px;
      border: 2px solid var(--text-color);
      z-index: 3;
    }

    .swiper::part(wrapper) {
      display: flex;
      overflow: hidden;
    }

    @media (min-width: 360px) {
      .swiper {
        height: 200px;
      }
    }

    @media (min-width: 600px) {
      .swiper {
        height: 225px;
      }
    }

    @media (min-width: 820px) {
      .swiper {
        height: 250px;
      }
    }
  `]
})
export class ProjectsComponent {
  protected readonly flexContainer = flexContainer
}
