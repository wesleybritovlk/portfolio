import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {AppComponent} from './app.component'
import {ContentModule} from './components/content.module'
import {AosModule} from './config/aos.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ContentModule,
    AosModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
