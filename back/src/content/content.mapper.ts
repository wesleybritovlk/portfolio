import { Content } from './content';
import { ContentResponse } from './content.response';
import { Inject } from '@nestjs/common';
import { HomeImageMapper } from './home-image/home-image.mapper';

export class ContentMapper {
  constructor(
    @Inject(HomeImageMapper) private homeMapper: HomeImageMapper,
  ) {
  }

  toResponse = (model: Content): ContentResponse =>
    new ContentResponse(
      this.homeMapper.toResponse(model.homeImage),
    );
}