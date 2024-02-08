import { HomeImageRequest, HomeImageResponse } from './home-image.dto';
import { HomeImage } from './home-image';
import { CommonMapper } from '../../common/common.mapper';

export class HomeImageMapper
  implements CommonMapper<HomeImage, HomeImageRequest, HomeImageResponse> {
  toModel(request: HomeImageRequest): HomeImage {
    let homeImage = new HomeImage();
    homeImage.url = request.url;
    homeImage.altEN = request.alt_en;
    homeImage.altPT = request.alt_pt;
    return homeImage;
  }

  toResponse(model: HomeImage): HomeImageResponse {
    let response = new HomeImageResponse();
    response.id = model.id;
    response.url = model.url;
    response.alt_en = model.altEN;
    response.alt_pt = model.altPT;
    return response;
  }
}
