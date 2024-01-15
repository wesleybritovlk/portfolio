import { CertificateRequest, CertificateResponse } from './certificate.dto';
import { Certificate } from './certificate';

export class CertificateMapper {
  toModel = (request: CertificateRequest): Certificate =>
    new Certificate(
      undefined,
      request.title,
      request.web_url,
      request.image_url,
      request.desc_en,
      request.desc_pt,
    );

  toModelUpdate = (model: Certificate, request: CertificateRequest): Certificate =>
    new Certificate(
      model.id,
      request.title,
      request.web_url,
      request.image_url,
      request.desc_en,
      request.desc_pt,
      model.createdAt,
    );

  toResponse = (model: Certificate): CertificateResponse =>
    model ? new CertificateResponse(
      model.id,
      model.title,
      model.webURL,
      model.imageURL,
      model.descEN,
      model.descPT,
    ) : undefined;
}