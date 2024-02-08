import { CertificateRequest, CertificateResponse } from './certificate.dto';
import { Certificate } from './certificate';
import { CommonMapper } from '../../common/common.mapper';

export class CertificateMapper
  implements CommonMapper<Certificate, CertificateRequest, CertificateResponse> {
  toModel(request: CertificateRequest): Certificate {
    let certificate = new Certificate();
    certificate.title = request.title;
    certificate.webURL = request.web_url;
    certificate.imageURL = request.image_url;
    certificate.descEN = request.desc_en;
    certificate.descPT = request.desc_pt;
    return certificate;
  }

  toResponse(model: Certificate): CertificateResponse {
    let response = new CertificateResponse();
    response.id = model.id;
    response.title = model.title;
    response.web_url = model.webURL;
    response.image_url = model.imageURL;
    response.desc_en = model.descEN;
    response.desc_pt = model.descPT;
    return response;
  }
}
