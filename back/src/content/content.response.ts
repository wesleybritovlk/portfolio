import { ApiProperty } from '@nestjs/swagger';
import { HomeImageResponse } from './home-image/home-image.dto';
import { SocialResponse } from './social/social.dto';
import { AboutResponse } from './about/about.dto';
import { ProjectResponse } from './project/project.dto';
import { CertificateResponse } from './certificate/certificate.dto';
import { ContactResponse } from './contact/contact.dto';

export class ContentResponse {
  @ApiProperty({
    name: 'home_image',
    required: false,
    format: 'object',
    type: HomeImageResponse,
  })
  home_image: HomeImageResponse;

  @ApiProperty({
    name: 'social',
    required: false,
    format: 'object',
    type: SocialResponse,
  })
  social: SocialResponse;

  @ApiProperty({
    name: 'about',
    required: false,
    format: 'object',
    type: AboutResponse,
  })
  about: AboutResponse;

  @ApiProperty({
    name: 'projects',
    required: false,
    format: 'array',
    type: ProjectResponse,
  })
  projects: ProjectResponse[];

  @ApiProperty({
    name: 'certificates',
    required: false,
    format: 'array',
    type: CertificateResponse,
  })
  certificates: CertificateResponse[];

  @ApiProperty({
    name: 'contact',
    required: false,
    format: 'object',
    type: ContactResponse,
  })
  contact: ContactResponse;

  constructor(home_image: HomeImageResponse, social: SocialResponse, about: AboutResponse, projects: ProjectResponse[], certificates: CertificateResponse[], contact: ContactResponse) {
    this.home_image = home_image;
    this.social = social;
    this.about = about;
    this.projects = projects;
    this.certificates = certificates;
    this.contact = contact;
  }
}
