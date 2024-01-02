import {Component} from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer>
      <div class="footer-copy">
        &copy; wesleybritovlk {{ Date.now() | date: 'yyyy' }}
      </div>
      <app-github-star/>
    </footer>
  `,
  styles: [`
    footer {
      position: absolute;
      width: 100%;
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
      background: var(--primary-color-dark);
      color: var(--btn-text-color);
      font-size: var(--text-size-smaller);
      font-weight: 600;
      padding: 10px;
    }

    .footer-copy {
      margin: 5px;
    }

    @media (min-width: 820px) {
      footer {
        flex-flow: row nowrap;
      }
    }
  `]
})
export class FooterComponent {
  protected readonly Date = Date;
}
