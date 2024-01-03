import {Component} from '@angular/core'
import {flexContainer} from '../../common/styles.common'

@Component({
  selector: 'app-contact',
  template: `
    <section [ngStyle]="flexContainer()">
      <h2>Contact me</h2>
      <div class="contact-container">
        <div class="contact-number">
          <i class="ri-whatsapp-fill"></i>
          +55 00 98888-8888
        </div>
        <div class="contact-or">or</div>
        <app-form/>
      </div>
    </section>
  `,
  styles: [`
    h2 {
      margin: 15px 5px;
      font-size: var(--title-size);
      color: var(--text-color);
    }

    .contact-container {
      border: 2px solid var(--text-color);
      border-radius: 25px;
      width: 100%;
      height: 100%;
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      justify-content: center;
    }

    .contact-number, .contact-or {
      font-size: var(--title-size-smaller);
      font-weight: 500;
      padding: 20px;
    }

    i {
      font-size: var(--title-size);
      color: darkgreen
    }

    @media (min-width: 820px) {
      .contact-container {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;
      }
    }
  `]
})
export class ContactComponent {
  protected readonly flexContainer = flexContainer
}
