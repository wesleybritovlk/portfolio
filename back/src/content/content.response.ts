import { ApiProperty } from '@nestjs/swagger';
import { HomeImageResponse } from './home-image/home-image.dto';
import { SocialResponse } from './social/social.dto';
import { AboutResponse } from './about/about.dto';

export class ContentResponse {
  @ApiProperty({
    name: 'home_image',
    required: false,
    format: 'object',
    type: HomeImageResponse,
  })
  home_image: HomeImageResponse;

  @ApiProperty({
    name: 'social',
    required: false,
    format: 'object',
    type: SocialResponse,
  })
  social: SocialResponse;

  @ApiProperty({
    name: 'about',
    required: false,
    format: 'object',
    type: AboutResponse,
  })
  about: AboutResponse;

  constructor(home_image: HomeImageResponse, social: SocialResponse, about: AboutResponse) {
    this.home_image = home_image;
    this.social = social;
    this.about = about;
  }
}
