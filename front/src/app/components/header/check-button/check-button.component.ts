import {Component, EventEmitter, Input, Output} from '@angular/core'
import {commonIcon} from '../../../common/styles.common'

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
  styleUrls: ['check-button.component.css'],
  styles: [`@media (min-width: 820px) {
    .switch {
      z-index: 0;
      cursor: pointer;
      position: relative;
      background: var(--bkg-color);
      color: var(--text-color);
      border: 2px solid var(--text-color);
      border-radius: 25px;
      display: inline-flex;
      align-items: center;
      width: 60px;
      height: 37px;
      font-size: var(--text-size);
      transition: all .5s ease-in-out;

      &:hover {
        border-color: var(--primary-color);
        box-shadow: 1px 2px 10px 0 var(--primary-color);
      }

      .swiper {
        z-index: 1;
        position: absolute;
        border-radius: 50%;
        transition: all .5s ease-in-out;
        transform: translateX(0);
        will-change: transform;
      }
    }

    .check:checked ~ .switch .swiper {
      transform: translateX(22px);
      will-change: transform;
    }
  }`]
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
