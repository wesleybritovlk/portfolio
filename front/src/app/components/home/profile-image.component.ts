import {Component, OnDestroy, OnInit} from '@angular/core'
import {StylesCommon} from '../../common/styles.common'
import {ContentService} from '../../services/content.service'
import {HomeImage} from '../../models/content'
import {Subscription} from 'rxjs'

@Component({
  selector: 'app-profile-image',
  template: `
    <div class="image-border" [ngStyle]="setBkgSize()">
      <img class="image-profile" [ngStyle]="setImageBkg(homeImage)" [title]="setAltByLang(homeImage)">
    </div>
  `,
  styles: [`
    .image-border {
      z-index: 0;
      content: '';
      position: relative;
      background: var(--bkg-color);
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 100%;

      .image-profile {
        border-radius: 100%;
      }

      &::after {
        z-index: -1;
        content: '';
        position: absolute;
        border-radius: 100%;
        width: 100%;
        height: 100%;
        background: var(--bkg-color);
      }

      &::before {
        z-index: -2;
        content: '';
        position: absolute;
        border-radius: 100%;
        background: linear-gradient(45deg, var(--primary-color-dark) 16%, var(--primary-color) 45%, var(--primary-color-light) 100%);
        filter: blur(2px);
        width: calc(100% + 8px);
        height: calc(100% + 8px);
        transition: opacity .3s ease-in-out;
      }
    }
  `]
})
export class ProfileImageComponent implements OnInit, OnDestroy {
  homeImage?: HomeImage
  homeImageSub?: Subscription

  responsiveImage = (): number => {
    let size = 170
    if (StylesCommon.mediaSmall.matches) size = 220
    if (StylesCommon.mediaMedium.matches) size = 260
    if (StylesCommon.mediaLarge.matches) size = 320
    if (StylesCommon.mediaExtraLarge.matches) size = 400
    return size
  }

  setBkgSize = (): Record<string, string> => ({
    width: `${this.responsiveImage() + 20}px`,
    height: `${this.responsiveImage() + 20}px`
  })

  setImageBkg(homeImage?: HomeImage): Record<string, string> {
    return {
      width: `${this.responsiveImage()}px`,
      height: `${this.responsiveImage()}px`,
      backgroundImage: `url(${homeImage?.url})`,
      backgroundSize: `${this.responsiveImage()}px`,
    }
  }

  setAltByLang(homeImage?: HomeImage) {
    let lang = document.documentElement.lang === 'en'
    return lang ? homeImage?.alt_en : homeImage?.alt_pt
  }

  constructor(
    private contentService: ContentService,
  ) {
  }

  ngOnInit(): void {
    this.homeImageSub = this.contentService.getContent().subscribe({
      next: data => this.homeImage = data.home_image,
      error: error => console.error(error)
    })
  }

  ngOnDestroy(): void {
    this.homeImageSub?.unsubscribe()
  }
}
