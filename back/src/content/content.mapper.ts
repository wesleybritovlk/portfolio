import { Inject } from '@nestjs/common';
import { Content } from './content';
import { ContentResponse } from './content.response';
import { HomeImageMapper } from './home-image/home-image.mapper';
import { SocialMapper } from './social/social.mapper';
import { AboutMapper } from './about/about.mapper';
import { ProjectMapper } from './project/project.mapper';
import { CertificateMapper } from './certificate/certificate.mapper';
import { ContactMapper } from './contact/contact.mapper';

export class ContentMapper {
  constructor(
    @Inject(HomeImageMapper) private homeMapper: HomeImageMapper,
    @Inject(SocialMapper) private socialMapper: SocialMapper,
    @Inject(AboutMapper) private aboutMapper: AboutMapper,
    @Inject(ProjectMapper) private projectMapper: ProjectMapper,
    @Inject(CertificateMapper) private certificateMapper: CertificateMapper,
    @Inject(ContactMapper) private contactMapper: ContactMapper,
  ) {
  }

  toResponse = (model: Content): ContentResponse =>
    model ? new ContentResponse(
      model.homeImage ? this.homeMapper.toResponse(model.homeImage) : undefined,
      model.social ? this.socialMapper.toResponse(model.social) : undefined,
      model.about ? this.aboutMapper.toResponse(model.about) : undefined,
      model.projects ? model.projects.map(this.projectMapper.toResponse) : undefined,
      model.certificates ? model.certificates.map(this.certificateMapper.toResponse) : undefined,
      model.contact ? this.contactMapper.toResponse(model.contact) : undefined,
    ) : undefined;
}
