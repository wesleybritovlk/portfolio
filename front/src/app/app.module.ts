import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {AppComponent} from './app.component'
import {AosModule} from './config/aos.module'
import {SwiperElementModule} from './config/swiper-element.module'
import {ContentModule} from './components/content.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AosModule,
    SwiperElementModule,
    ContentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
