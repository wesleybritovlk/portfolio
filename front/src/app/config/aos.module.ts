import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import * as AOS from "aos";

@NgModule({
  imports: [
    CommonModule,
  ]
})
export class AosModule {
  constructor() {
    AOS.init();
  }
}

