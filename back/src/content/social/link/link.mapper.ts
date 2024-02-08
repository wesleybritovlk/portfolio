import { Link } from './link';
import { LinkRequest, LinkResponse } from './link.dto';
import { Social } from '../social';
import { CommonMapper } from '../../../common/common.mapper';

export class LinkMapper
  implements CommonMapper<Link, LinkRequest, LinkResponse> {
  toModel(request: LinkRequest, parentId?: string): Link {
    let link = new Link();
    link.name = request.name;
    link.url = request.url;
    let social = new Social();
    social.id = parentId;
    link.social = social;
    return link;
  }

  toResponse(model: Link): LinkResponse {
    let response = new LinkResponse();
    response.id = model.id;
    response.name = model.name;
    response.url = model.url;
    return response;
  }
}
