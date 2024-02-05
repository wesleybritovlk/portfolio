import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseAsyncConfig } from '../config/database.config';
import { HomeImage } from './home-image/home-image';
import { HomeImageServiceImpl } from './home-image/home-image.service';
import { HomeImageMapper } from './home-image/home-image.mapper';
import { HomeImageController } from './home-image/home-image.controller';
import { Social } from './social/social';
import { SocialServiceImpl } from './social/social.service';
import { SocialMapper } from './social/social.mapper';
import { SocialController } from './social/social.controller';
import { Link } from './social/link/link';
import { LinkController } from './social/link/link.controller';
import { LinkServiceImpl } from './social/link/link.service';
import { LinkMapper } from './social/link/link.mapper';
import { About } from './about/about';
import { AboutServiceImpl } from './about/about.service';
import { AboutMapper } from './about/about.mapper';
import { AboutController } from './about/about.controller';
import { Skill } from './about/skill/skill';
import { SkillController } from './about/skill/skill.controller';
import { SkillServiceImpl } from './about/skill/skill.service';
import { SkillMapper } from './about/skill/skill.mapper';
import { Project } from './project/project';
import { ProjectMapper } from './project/project.mapper';
import { ProjectServiceImpl } from './project/project.service';
import { ProjectController } from './project/project.controller';
import { Certificate } from './certificate/certificate';
import { CertificateServiceImpl } from './certificate/certificate.service';
import { CertificateMapper } from './certificate/certificate.mapper';
import { CertificateController } from './certificate/certificate.controller';
import { Contact } from './contact/contact';
import { ContactMapper } from './contact/contact.mapper';
import { ContactServiceImpl } from './contact/contact.service';
import { ContactController } from './contact/contact.controller';
import { Github } from './contact/github/github';
import { CacheModule } from '@nestjs/cache-manager';
import { cacheAsyncConfig } from '../config/cache.config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync(databaseAsyncConfig),
    TypeOrmModule.forFeature(ContentModule.entitiesDatabase),
    CacheModule.registerAsync(cacheAsyncConfig),
  ],
  controllers: [
    HomeImageController,
    SocialController,
    LinkController,
    AboutController,
    SkillController,
    ProjectController,
    CertificateController,
    ContactController,
  ],
  providers: [
    { provide: 'HomeImageService', useClass: HomeImageServiceImpl },
    { provide: 'SocialService', useClass: SocialServiceImpl },
    { provide: 'LinkService', useClass: LinkServiceImpl },
    { provide: 'AboutService', useClass: AboutServiceImpl },
    { provide: 'SkillService', useClass: SkillServiceImpl },
    { provide: 'ProjectService', useClass: ProjectServiceImpl },
    { provide: 'CertificateService', useClass: CertificateServiceImpl },
    { provide: 'ContactService', useClass: ContactServiceImpl },
    HomeImageMapper,
    SocialMapper,
    LinkMapper,
    AboutMapper,
    SkillMapper,
    ProjectMapper,
    CertificateMapper,
    ContactMapper,
  ],
})
export class ContentModule {
  static entitiesDatabase: any[] = [
    HomeImage,
    Social,
    Link,
    About,
    Skill,
    Project,
    Certificate,
    Contact,
    Github,
  ];
}
