import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {AppComponent} from './app.component'
import {ContentModule} from './components/content.module'
import {AosModule} from './config/aos.module'
import {SwiperElementModule} from './config/swiper-element.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ContentModule,
    AosModule,
    SwiperElementModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
