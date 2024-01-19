import {Component} from '@angular/core'
import {commonButton} from '../../common/styles.common'
import {ContentService} from '../../services/content.service'
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {FormService} from '../../services/form.service'

@Component({
  selector: 'app-form',
  template: `
    <form class="form" [formGroup]="formEmail" (ngSubmit)="onSubmit(formEmail)">
      <div class="form-field">
        <label class="label">{{ 'form_first-name' | translate }}:<span class="required">*</span></label>
        <input class="input" type="text" formControlName="firstName"
               [class.invalid]="setRequired(formEmail, 'firstName')">
        <span class="error" *ngIf="setRequired(formEmail, 'firstName')">
          {{ 'form_required-name' | translate }}
        </span>
      </div>
      <div class="form-field">
        <label class="label">{{ 'form_last-name' | translate }}:</label>
        <input class="input" type="text" formControlName="lastName">
      </div>
      <div class="form-field">
        <label class="label">{{ 'form_email' | translate }}:<span class="required">*</span></label>
        <input class="input" type="email" formControlName="email"
               [class.invalid]="setRequired(formEmail, 'email')">
        <span class="error" *ngIf="setRequired(formEmail, 'email')">
          {{ 'form_required-email' | translate }}
        </span>
      </div>
      <div class="form-field">
        <label class="label">{{ 'form_message' | translate }}:</label>
        <textarea class="textarea" formControlName="message"></textarea>
      </div>
      <div class="form-field">
        <button class="button" type="submit" [disabled]="formEmail.invalid"
                [ngStyle]="commonButton(formEmail.invalid, setColorByState(formEmail.valid, send))">
          <i *ngIf="formEmail.valid && isLoading" class="button-icon ri-loader-4-line --loading"></i>
          <i *ngIf="formEmail.valid && !isLoading" class="button-icon ri-send-plane-fill"></i>
          <i *ngIf="formEmail.invalid && !send" class="button-icon ri-close-line"></i>
          <i *ngIf="formEmail.invalid && send" class="button-icon ri-check-line"></i>
        </button>
        <button [ngStyle]="commonButton()" class="button" (click)="openResume(resume)">
          <i class="button-icon ri-file-download-line"></i>
        </button>
      </div>
    </form>`,
  styleUrls: ['form.component.css']
})
export class FormComponent {
  protected readonly commonButton = commonButton
  formEmail = this.fb.nonNullable.group({
    firstName: ['', [Validators.required, Validators.minLength(3)]],
    lastName: ['', Validators.max(50)],
    email: ['', [Validators.required, Validators.pattern(/(^[\w.]{3,50})(@)(\w{2,30})(\.\w{2,10}){1,2}$/)]],
    message: ['', Validators.max(500)],
  })
  isLoading: boolean = false
  send: boolean = false
  resume?: string

  constructor(
    private fb: FormBuilder,
    private formService: FormService,
    private contentService: ContentService,
  ) {
    this.contentService.getContent().subscribe({
      next: data => this.resume = data.contact.resume_url,
      error: error => console.error(error)
    })
    this.formService.isSending.subscribe({
      next: data => this.isLoading = data,
      error: error => console.error(error)
    })
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

  setRequired = (formEmail: FormGroup, formControlName: string) => formEmail.get(formControlName)?.invalid &&
    (formEmail.get(formControlName)?.dirty || formEmail.get(formControlName)?.touched)

  setColorByState = (valid: boolean, send: boolean) => {
    if (!valid && !send) return '#FF000041'
    if (!valid && send) return '#22FF0072'
    return undefined
  }

  openResume = (resume: string | undefined) => open(resume, '_blank')
}
