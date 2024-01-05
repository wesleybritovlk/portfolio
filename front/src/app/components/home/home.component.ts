import {Component} from '@angular/core'

@Component({
  selector: 'app-home',
  template: `
    <div class="hero-text">
      <p>{{ 'home_hello' | translate }}</p>
      <h1>Wesley Brito</h1>
      <p>{{ 'home_desc' | translate }}</p>
    </div>
    <div class="hero-image">
      <app-profile-image/>
    </div>
  `,
  styleUrls: ['home.component.css']
})
export class HomeComponent {
}
