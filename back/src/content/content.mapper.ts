import { Content } from './content';
import { ContentResponse } from './content.response';
import { Inject } from '@nestjs/common';
import { HomeImageMapper } from './home-image/home-image.mapper';
import { SocialMapper } from './social/social.mapper';

export class ContentMapper {
  constructor(
    @Inject(HomeImageMapper) private homeMapper: HomeImageMapper,
    @Inject(SocialMapper) private socialMapper: SocialMapper,
  ) {
  }

  toResponse = (model: Content): ContentResponse =>
    model ? new ContentResponse(
      model.homeImage ? this.homeMapper.toResponse(model.homeImage) : undefined,
      model.social ? this.socialMapper.toResponse(model.social) : undefined,
    ) : undefined;
}
