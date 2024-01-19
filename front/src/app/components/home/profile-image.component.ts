import {Component} from '@angular/core'
import {StylesCommon} from '../../common/styles.common'
import {ContentService} from '../../services/content.service'
import {HomeImage} from '../../models/content'

@Component({
  selector: 'app-profile-image',
  template: `
    <div class="image-border">
      <img style="border-radius: 100%"
           [ngStyle]="setImageBkg(homeImage)" [title]="setAltByLang(homeImage)">
    </div>
  `,
  styles: [`
    .image-border {
      display: flex;
      justify-content: center;
      border: 6px solid var(--primary-color);
      border-radius: 100%;
      padding: 10px;
    }
  `]
})
export class ProfileImageComponent {
  homeImage?: HomeImage

  constructor(
    private contentService: ContentService,
  ) {
    this.contentService.getContent().subscribe({
      next: data => this.homeImage = data.home_image,
      error: error => console.error(error)
    })
  }

  responsiveImage = (): number => {
    let size = 175
    if (StylesCommon.mediaMobile.matches) size = 250
    if (StylesCommon.mediaTablet.matches) size = 300
    if (StylesCommon.mediaLaptop.matches) size = 415
    return size
  }

  setImageBkg(homeImage: HomeImage | undefined): Record<string, string> {
    return {
      width: `${this.responsiveImage()}px`,
      height: `${this.responsiveImage()}px`,
      backgroundImage: `url(${homeImage?.url})`,
      backgroundSize: `${this.responsiveImage()}px`,
    }
  }

  setAltByLang(homeImage: HomeImage | undefined) {
    let lang = document.documentElement.lang === 'en'
    return lang ? homeImage?.alt_en : homeImage?.alt_pt
  }
}
