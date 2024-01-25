import {Component} from '@angular/core'

@Component({
  selector: 'app-return-button',
  template: `
    <div class="return-container">
      <button class="return-btn ri-arrow-up-fill"
              [ngStyle]="styleByScroll()" (click)="onClick()"
      ></button>
    </div>
  `,
  styleUrls: ['return-button.component.css'],
  styles: [
    `@media (min-width: 360px) {
      .return-container .return-btn {
        bottom: 58rem;
      }

      @media (max-height: 640px) {
        .return-container .return-btn {
          bottom: 62rem;
        }
      }

      @media (min-height: 800px) {
        .return-container .return-btn {
          bottom: 52.3rem;
        }
      }

      @media (min-height: 890px) {
        .return-container .return-btn {
          bottom: 47.5rem;
        }
      }
    }`,
    `@media (min-width: 600px) {
      .return-container .return-btn {
        bottom: 55rem;
      }

      @media (min-height: 1020px) {
        .return-container .return-btn {
          bottom: 51.5rem;
        }
      }

      @media (min-height: 1130px) {
        .return-container .return-btn {
          bottom: 44rem;
        }
      }

      @media (min-height: 1280px) {
        .return-container .return-btn {
          bottom: 36rem;
        }
      }
    }`,
    `@media (min-width: 820px) {
      .return-container .return-btn {
        bottom: 52rem;
      }
    }`
  ]
})
export class ReturnButtonComponent {
  styleByScroll = (): Record<string, string> =>
    document.documentElement.scrollTop > 500 ? {display: 'block'} : {display: 'none'}

  onClick = () => document.documentElement.scrollTop = 0
}
