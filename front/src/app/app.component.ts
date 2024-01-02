import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {viewContainer} from "./common/styles.common";

@Component({
  selector: 'app-root',
  template: `
    <app-header/>
    <app-home [ngStyle]="viewContainer()" id="home"/>
    <app-social/>
    <app-about [ngStyle]="viewContainer()" id="about"/>
    <app-return-button/>
    <app-projects [ngStyle]="viewContainer()" id="projects"/>
    <app-contact [ngStyle]="viewContainer()" id="contact"/>
    <app-footer/>
  `
})
export class AppComponent {
  protected readonly viewContainer = viewContainer;
  title = 'Portfolio';

  constructor(translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

}
