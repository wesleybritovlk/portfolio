import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {SwiperModule} from 'swiper/angular'
import SwiperCore, {Lazy, Navigation, Pagination, Virtual} from 'swiper'

@NgModule({
  imports: [
    CommonModule,
    SwiperModule
  ],
  exports: [SwiperModule]
})
export class SwiperAngularModule {
  constructor() {
    SwiperCore.use([
      Lazy,
      Navigation,
      Pagination,
      Virtual
    ])
  }
}
