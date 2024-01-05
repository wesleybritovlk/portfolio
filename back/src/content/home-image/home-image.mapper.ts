import { HomeImageRequest, HomeImageResponse } from './home-image.dto';
import { HomeImage } from './home-image';

export class HomeImageMapper {
  toModel = (request: HomeImageRequest): HomeImage =>
    new HomeImage(
      request.url,
      request.alt_en,
      request.alt_pt,
    );

  toResponse = (model: HomeImage): HomeImageResponse =>
    new HomeImageResponse(
      model.url,
      model.altEN,
      model.altPT,
    );
}