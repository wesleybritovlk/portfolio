import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {SocialComponent} from './social.component'
import {HeaderComponent} from './header/header.component'
import {HomeComponent} from './home/home.component'
import {AboutComponent} from './about/about.component'
import {ProjectsComponent} from './projects/projects.component'
import {ContactComponent} from './contact/contact.component'
import {ReturnButtonComponent} from './return-button.component'
import {FooterComponent} from './footer.component'
import {TypewriterComponent} from './header/typewriter.component'
import {CheckButtonComponent} from './header/check-button.component'
import {ProfileImageComponent} from './home/profile-image.component'
import {CardComponent} from './projects/card.component'
import {FormComponent} from './contact/form.component'
import {GithubStarComponent} from './github-star.component'
import {TranslatedModule} from '../config/translated.module'

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    SocialComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    ReturnButtonComponent,
    FooterComponent,
    TypewriterComponent,
    CheckButtonComponent,
    ProfileImageComponent,
    CardComponent,
    FormComponent,
    GithubStarComponent,
  ],
  exports: [
    HeaderComponent,
    HomeComponent,
    SocialComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    ReturnButtonComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    TranslatedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ContentModule {
}
