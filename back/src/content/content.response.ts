import { HomeImageResponse } from './home-image/home-image.dto';

export class ContentResponse {
  home_image: HomeImageResponse;

  constructor(home_image: HomeImageResponse) {
    this.home_image = home_image;
  }
}
