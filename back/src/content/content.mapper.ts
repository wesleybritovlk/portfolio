import { Content } from './content';
import { ContentResponse } from './content.response';
import { Inject } from '@nestjs/common';
import { HomeImageMapper } from './home-image/home-image.mapper';
import { SocialMapper } from './social/social.mapper';
import { AboutMapper } from './about/about.mapper';

export class ContentMapper {
  constructor(
    @Inject(HomeImageMapper) private homeMapper: HomeImageMapper,
    @Inject(SocialMapper) private socialMapper: SocialMapper,
    @Inject(AboutMapper) private aboutMapper: AboutMapper,
  ) {
  }

  toResponse = (model: Content): ContentResponse =>
    model ? new ContentResponse(
      model.homeImage ? this.homeMapper.toResponse(model.homeImage) : undefined,
      model.social ? this.socialMapper.toResponse(model.social) : undefined,
      model.about ? this.aboutMapper.toResponse(model.about) : undefined,
    ) : undefined;
}
