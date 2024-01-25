import {Component} from '@angular/core'
import {viewContainer} from './common/styles.common'

@Component({
  selector: 'app-root',
  template: `
    <app-header (pageTarget)="scrollIntoView($event)"/>
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
  protected readonly viewContainer = viewContainer
  scrollIntoView = (id: string) => document.getElementById(id)?.scrollIntoView()
}
