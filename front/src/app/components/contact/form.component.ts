import {Component} from '@angular/core'
import {commonButton} from '../../common/styles.common'

@Component({
  selector: 'app-form',
  template: `
    <form>
      <label>First name:<span>*</span></label>
      <input>
      <label>Last name:</label>
      <input>
      <label>Email:<span>*</span></label>
      <input>
      <label>Message:</label>
      <textarea></textarea>
      <div class="form-button">
        <button [ngStyle]="commonButton(true, '#FF000041')" class="ri-close-line"></button>
        <button [ngStyle]="commonButton()" class="ri-file-download-line"></button>
      </div>
    </form>
  `,
  styles: [`
    form {
      display: flex;
      flex-flow: column nowrap;
      width: 215px;
      height: 100%;
      padding: 10px;
    }

    label {
      font-size: var(--text-size);
      margin: 5px 0;
    }

    span {
      color: red
    }

    input, textarea {
      border-radius: 10px;
      font-size: var(--text-size);
      padding: 5px;
      height: 1.5rem;
      min-width: 100%;
      max-width: 100%;
    }

    textarea {
      min-height: 125px;
      height: 125px;
      max-height: 125px;
    }

    button {
      font-size: var(--text-size-large);
      margin-right: 5px;
      margin-top: 5px;
    }

    @media (min-width: 360px) {
      form {
        width: 250px;
        padding-bottom: 20px;
      }

      textarea {
        min-height: 150px;
        height: 150px;
        max-height: 150px;
      }
    }

    @media (min-width: 600px) {
      form {
        width: 350px;
        padding-bottom: 25px;
      }

      input {
        height: 1.75rem;
      }

      textarea {
        min-height: 160px;
        height: 160px;
        max-height: 160px;
      }
    }

    @media (min-width: 820px) {
      form {
        width: 400px;
        padding-bottom: 30px;
      }

      input {
        height: 2rem;
      }

      textarea {
        min-height: 180px;
        height: 180px;
        max-height: 180px;
        padding: 10px;
      }
    }
  `]
})
export class FormComponent {
  protected readonly commonButton = commonButton
}
