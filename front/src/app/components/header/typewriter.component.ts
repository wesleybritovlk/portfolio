import {Component} from '@angular/core';

@Component({
  selector: 'app-typewriter',
  template: `<span>{{ displayTexts[0] }}</span>`,
  styles: [`
    span {
      color: var(--primary-color);
    }
  `]
})
export class TypewriterComponent {
  displayTexts: string[] = ["Brito", "VLK"];

}
