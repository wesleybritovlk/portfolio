import {Component, Input} from '@angular/core'
import {commonIcon} from '../../common/styles.common'

@Component({
  selector: 'app-glow-button',
  template: `
    <button class="glow-btn">
      <label class="btn-title" *ngIf="!smallTitle">
        {{ title }}
      </label>
      <label class="btn-title" *ngIf="smallTitle">
        {{ smallTitle }}
      </label>
      <i [class]="icon" *ngIf="icon" [ngStyle]="commonIcon()"></i>
    </button>
  `,
  styleUrls: ['./glow-button.component.css']
})
export class GlowButtonComponent {
  protected readonly commonIcon = commonIcon
  @Input() title?: string
  @Input() smallTitle?: string
  @Input() icon?: string
}
