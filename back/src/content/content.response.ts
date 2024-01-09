import { ApiProperty } from '@nestjs/swagger';
import { HomeImageResponse } from './home-image/home-image.dto';
import { SocialResponse } from './social/social.dto';

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

  constructor(home_image: HomeImageResponse, social: SocialResponse) {
    this.home_image = home_image;
    this.social = social;
  }
}
