import {Component, Input, OnDestroy, OnInit} from '@angular/core'
import {FormService} from '../../../../services/form.service'
import {Subscription} from 'rxjs'

@Component({
  selector: 'app-state-button',
  template: `
    <button class="state-btn" type="submit"
            [class.--invalid]="isTouched"
            [class.--send]="send"
            [disabled]="!isValid    ">
      <i *ngIf="(!isTouched && !send) || (isValid && !isLoading)"
         class="btn-icon ri-send-plane-fill"></i>
      <i *ngIf="isTouched && !isValid"
         class="btn-icon ri-close-line"></i>
      <i *ngIf="isLoading"
         class="btn-icon ri-loader-4-line"
         [class.--loading]="isLoading"></i>
      <i *ngIf="send"
         class="btn-icon ri-check-line"></i>
    </button>
  `,
  styleUrls: ['./state-button.component.css'],
  styles: [
    `@media (min-width: 360px) {
      .state-btn {
        width: 75px;
        height: 45px;
        font-size: var(--text-size);
      }
    }`,
    `@media (min-width: 600px) {
      .state-btn {
        width: 85px;
        height: 47px;
      }
    }`,
    `@media (min-width: 820px) {
      .state-btn {
        width: 87px;
        height: 48px;
      }
    }`
  ]
})
export class StateButtonComponent implements OnInit, OnDestroy {
  @Input() isValid?: boolean = false
  @Input() isTouched?: boolean = false
  @Input() send: boolean = false
  isLoading: boolean = false
  loaderSub?: Subscription

  constructor(
    private formService: FormService
  ) {
  }

  ngOnInit(): void {
    this.loaderSub = this.formService.loader.subscribe({
      next: data => this.isLoading = data,
      error: error => console.error(error)
    })
  }

  ngOnDestroy(): void {
    this.loaderSub?.unsubscribe()
  }
}
