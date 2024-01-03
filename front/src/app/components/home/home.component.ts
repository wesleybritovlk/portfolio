import {Component} from '@angular/core'

@Component({
  selector: 'app-home',
  template: `
    <div class="hero-text">
      <p>I am</p>
      <h1>Wesley Brito</h1>
      <p>And I'm a Software Developer</p>
    </div>
    <div class="hero-image">
      <app-profile-image/>
    </div>
  `,
  styles: [`
    .hero-text {
      width: 225px;
      margin: 7% 0 0 0;
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
    }

    p {
      color: var(--text-color);
      font-size: var(--title-size-smaller);
      font-weight: 400;
      margin: 2px 0;
    }

    h1 {
      color: var(--primary-color-dark);
      font-size: var(--title-size-large);
      font-weight: 700;
    }

    @media (min-width: 360px) {
      .hero-text {
        width: 300px;
      }
    }

    @media (min-width: 600px) {
      .hero-text {
        width: 400px;
      }
    }

    @media (min-width: 820px) {
      .hero-text, .hero-image {
        width: 450px;
        height: 640px;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
      }

      .hero-text {
        align-items: start;
        margin: 0 5% 0 0;
      }

      p {
        font-weight: 545;
      }
    }
  `]
})
export class HomeComponent {
}
