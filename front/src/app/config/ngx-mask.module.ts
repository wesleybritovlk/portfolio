import {NgModule} from '@angular/core'
import {NgxMaskPipe, provideEnvironmentNgxMask} from 'ngx-mask'

@NgModule({
  imports: [
    NgxMaskPipe
  ],
  providers: [
    provideEnvironmentNgxMask()
  ],
  exports: [
    NgxMaskPipe
  ]
})
export class NgxMaskModule {
}
