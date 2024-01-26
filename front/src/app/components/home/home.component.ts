import {Component} from '@angular/core'

@Component({
  selector: 'app-home',
  template: `
    <section class="hero-container">
      <div class="hero-info">
        <p class="info-text">{{ 'home_hello' | translate }}</p>
        <h1 class="info-title">Wesley Brito</h1>
        <p class="info-text">{{ 'home_desc' | translate }}</p>
        <app-resume-button class="info-btn"/>
      </div>
      <div class="hero-image">
        <app-profile-image/>
      </div>
    </section>
  `,
  styleUrls: ['home.component.css'],
  styles: [
    `@media (min-width: 360px) {
      .hero-container .hero-info {
        width: 300px;
      }
    }`,
    `@media (min-width: 600px) {
      .hero-container .hero-info {
        width: 400px;
      }
    }`,
    `@media (min-width: 820px) {
      .hero-container {
        flex-flow: row nowrap;
        justify-content: space-around;
        width: 100%;

        .hero-info, .hero-image {
          width: 460px;
          height: 640px;
          display: flex;
          flex-flow: column nowrap;
          justify-content: center;
        }

        .hero-info {
          align-items: start;
          margin: 0;
          padding-left: 3%;

          .info-text {
            font-weight: 600;
          }
        }

        .hero-image {
          align-items: center;
        }
      }
    }`,
    `@media (min-width: 1340px) {
      .hero-container .hero-info {
        width: 475px;
        padding-right: 2rem;
        margin: 0;
      }
    }`]
})
export class HomeComponent {
}
