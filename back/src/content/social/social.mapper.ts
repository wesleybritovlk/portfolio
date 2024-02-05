import { SocialRequest, SocialResponse } from './social.dto';
import { Social } from './social';
import { CommonMapper } from '../../common/common.mapper';
import { LinkResponse } from './link/link.dto';

export class SocialMapper
  implements CommonMapper<Social, SocialRequest, SocialResponse> {

  toModel(request: SocialRequest): Social {
    let social = new Social();
    social.email = request.email;
    return social;
  }

  toResponse(model: Social): SocialResponse {
    let response = new SocialResponse();
    response.id = model.id;
    response.email = model.email;
    response.links = model.links.map(link => {
      let linkResponse = new LinkResponse();
      linkResponse.id = link.id;
      linkResponse.name = link.name;
      linkResponse.url = link.url;
      return linkResponse;
    });
    return response;
  }
}
