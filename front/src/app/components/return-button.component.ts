import {Component} from '@angular/core'

@Component({
  selector: 'app-return-button',
  template: `
    <div class="return-container">
      <button [ngStyle]="styleByScroll()" (click)="onClick()"
              class="ri-arrow-up-fill"></button>
    </div>
  `,
  styles: [`
    .return-container {
      z-index: 1;
      position: fixed;
      display: inline-flex;
      justify-content: flex-end;
      height: fit-content;
      width: 94%;
    }

    button {
      display: none;
      cursor: pointer;
      position: relative;
      color: var(--text-color);
      background: var(--bkg-color);
      font-size: var(--text-size-large);
      border: 2px solid var(--text-color);
      border-radius: 10px;
      padding: 8px;
      bottom: 53.5rem;
      transition: .3s ease-in-out;
    }

    button:hover,
    button:focus-within,
    button:active {
      color: var(--primary-color);
      border-color: var(--primary-color);
    }

    @media (min-width: 360px) {
      button {
        bottom: 57rem;
      }
    }

    @media (min-width: 600px) {
      button {
        bottom: 53rem;
      }
    }
  `]
})
export class ReturnButtonComponent {
  styleByScroll = (): Record<string, string> =>
    document.documentElement.scrollTop > 580 ? {display: 'block'} : {display: 'none'}

  onClick() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }
}
