import {Component} from '@angular/core'
import {StylesCommon} from '../../common/styles.common'

@Component({
  selector: 'app-profile-image',
  template: `
    <div class="image-border">
      <i style="border-radius: 100%" [ngStyle]="setImageBkg()" [title]="'my photo profile'"></i>
    </div>
  `,
  styles: [`
    .image-border {
      display: flex;
      justify-content: center;
      align-Items: center;
      border: 6px solid var(--primary-color);
      border-radius: 100%;
      padding: 10px;
    }
  `]
})
export class ProfileImageComponent {
  imgLink: string = `https://gravatar.com/userimage/186978239/9e05dd2477009eb15b0404bade0e8a65.jpeg?size=1000`

  responsiveImage = (): number => {
    let size = 175
    if (StylesCommon.mediaMobile.matches) size = 250
    if (StylesCommon.mediaTablet.matches) size = 300
    if (StylesCommon.mediaLaptop.matches) size = 415
    return size
  }

  setImageBkg(): Record<string, string> {
    return {
      width: `${this.responsiveImage()}px`,
      height: `${this.responsiveImage()}px`,
      backgroundImage: `url(${this.imgLink})`,
      backgroundSize: `${this.responsiveImage()}px`,
    }
  }
}
