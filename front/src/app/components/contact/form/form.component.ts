import {Component} from '@angular/core'
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {FormService} from '../../../services/form.service'

@Component({
  selector: 'app-form',
  template: `
    <form class="form" [formGroup]="formEmail" (ngSubmit)="onSubmit(formEmail)">
      <div class="form-field">
        <label class="field-label">{{ 'form_first-name' | translate }}:<span class="required">*</span></label>
        <input class="field-input" type="text" formControlName="firstName"
               [class.--invalid]="setRequired(formEmail, 'firstName')">
        <span class="error" *ngIf="setRequired(formEmail, 'firstName')">
          {{ 'form_required-name' | translate }}
        </span>
      </div>
      <div class="form-field">
        <label class="field-label">{{ 'form_last-name' | translate }}:</label>
        <input class="field-input" type="text" formControlName="lastName">
      </div>
      <div class="form-field">
        <label class="field-label">{{ 'form_email' | translate }}:<span class="required">*</span></label>
        <input class="field-input" type="email" formControlName="email"
               [class.--invalid]="setRequired(formEmail, 'email')">
        <span class="error" *ngIf="setRequired(formEmail, 'email')">
          {{ 'form_required-email' | translate }}
        </span>
      </div>
      <div class="form-field">
        <label class="field-label">{{ 'form_message' | translate }}:</label>
        <textarea class="field-textarea" formControlName="message"></textarea>
      </div>
      <div class="form-button">
        <app-state-button
          [isValid]="formEmail.valid"
          [isTouched]="setRequiredTouched(formEmail, 'firstName', 'email')"
          [send]="send"/>
        <app-resume-button [small]="true"/>
      </div>
    </form>`,
  styleUrls: ['form.component.css'],
  styles: [
    `@media (min-width: 360px) {
      .form {
        width: 250px;
        padding-bottom: 20px;

        .form-field .field-textarea {
          min-height: 150px;
          height: 150px;
          max-height: 150px;
        }
      }
    }`,
    `@media (min-width: 600px) {
      .form {
        width: 350px;
        padding-bottom: 25px;

        .form-field .field-input {
          height: 1.75rem;
        }

        .form-field .field-textarea {
          min-height: 160px;
          height: 160px;
          max-height: 160px;
        }
      }
    }`,
    `@media (min-width: 820px) {
      .form {
        width: 400px;
        padding-bottom: 30px;

        .form-field .field-input {
          height: 2rem;
        }

        .form-field .field-textarea {
          min-height: 180px;
          height: 180px;
          max-height: 180px;
          padding: 10px;
        }
      }
    }`
  ]
})
export class FormComponent {
  formEmail = this.fb.nonNullable.group({
    firstName: ['', [Validators.required, Validators.minLength(3)]],
    lastName: ['', Validators.max(50)],
    email: ['', [Validators.required, Validators.pattern(/(^[\w.]{3,50})(@)(\w{2,30})(\.\w{2,10}){1,2}$/)]],
    message: ['', Validators.max(500)],
  })
  send: boolean = false

  constructor(
    private fb: FormBuilder,
    private formService: FormService
  ) {
  }

  onSubmit(formEmail: FormGroup) {
    if (formEmail.valid) {
      this.formService.postForm({
        first_name: formEmail.value.firstName,
        last_name: formEmail.value.lastName,
        email: formEmail.value.email,
        message: formEmail.value.message,
      }).subscribe({
        error: async err => {
          if (err.status !== 202) console.error(err)
          else {
            formEmail.reset()
            await this.toggleSend()
            await this.toggleSend()
          }
        }
      })
    }
  }

  toggleSend = () => new Promise((resolve) => {
    this.send = !this.send
    setTimeout(resolve, 2000)
  })

  setRequired = (formEmail: FormGroup, controlName: string) => formEmail.get(controlName)?.invalid &&
    (formEmail.get(controlName)?.dirty || formEmail.get(controlName)?.touched)

  setRequiredTouched(formEmail: FormGroup, ...controlNames: string[]) {
    let isTouched: boolean | undefined = false
    controlNames.find(controlName => isTouched =
      formEmail.get(controlName)?.dirty || formEmail.get(controlName)?.touched)
    return isTouched;
  }
}
