import { SocialLinkRequest, SocialLinkResponse, SocialRequest, SocialResponse } from './social.dto';
import { Social, SocialLink } from './social';

export class SocialMapper {
  toModel = (request: SocialRequest): Social =>
    new Social(
      [],
      request.email,
    );

  toModelUpdate = (model: Social, request: SocialRequest): Social =>
    new Social(
      model.links,
      request.email,
    );

  toResponse = (model: Social): SocialResponse =>
    model ? new SocialResponse(
      model.links ? model.links.map(this.toResponseLink) : [],
      model.email,
    ) : undefined;

  toModelLink = (request: SocialLinkRequest): SocialLink =>
    new SocialLink(
      undefined,
      request.name,
      request.url,
    );

  toModelUpdateLink = (model: SocialLink, request: SocialLinkRequest): SocialLink => new SocialLink(
    model.id,
    request.name,
    request.url,
    model.createdAt,
  );

  toResponseLink = (model: SocialLink): SocialLinkResponse =>
    model ? new SocialLinkResponse(
      model.id,
      model.name,
      model.url,
    ) : undefined;
}
