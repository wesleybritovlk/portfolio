import {Component, EventEmitter, Input, Output} from '@angular/core'
import {commonIcon} from '../../common/styles.common'

@Component({
  selector: 'app-check-button',
  template: `
    <input class="check" type="checkbox" [checked]="check"/>
    <label class="switch" (click)="onClick()">
      <span class="swiper">
        <i [ngStyle]="commonIcon()" [ngClass]="check ? iconOff : iconOn"></i>
      </span>
    </label>
  `,
  styles: [`
    i {
      cursor: pointer;
      color: var(--text-color);
      font-weight: 500;
      transition: .5s ease-in-out;
    }

    .check {
      display: none;
    }

    .switch:hover .swiper i,
    .switch:focus-within .swiper i,
    .switch:active .swiper i {
      color: var(--primary-color);
    }

    @media (min-width: 820px) {
      .switch {
        cursor: pointer;
        position: relative;
        background: var(--bkg-color);
        color: var(--text-color);
        border: 2px solid var(--text-color);
        border-radius: 25px;
        display: inline-flex;
        align-items: center;
        width: 70px;
        height: 37px;
        font-size: var(--text-size);
        transition: .5s ease-in-out;
      }

      .swiper {
        position: absolute;
        border-radius: 50%;
        left: 4px;
        transition: .5s ease-in-out;
      }

      .check:checked ~ .switch .swiper {
        transform: translateX(25px);
      }

      .switch:hover {
        border-color: var(--primary-color);
      }
    }
  `]
})
export class CheckButtonComponent {
  @Input() iconOn?: string
  @Input() iconOff?: string
  @Input() check: boolean = false
  @Output() isChecked: EventEmitter<boolean> = new EventEmitter()
  protected readonly commonIcon = commonIcon

  onClick() {
    this.check = !this.check
    this.isChecked.emit(this.check)
  }
}
