import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {register} from 'swiper/element/bundle'

@NgModule({
  imports: [
    CommonModule
  ]
})
export class SwiperElementModule {
  constructor() {
    register()
  }
}
