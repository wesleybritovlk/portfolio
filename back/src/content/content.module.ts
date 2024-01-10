import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseAsyncConfig } from '../config/database.config';
import { cacheAsyncConfig } from '../config/cache.config';
import { Content } from './content';
import { ContentServiceImpl } from './content.service';
import { ContentMapper } from './content.mapper';
import { ContentController } from './content.controller';
import { HomeImage } from './home-image/home-image';
import { HomeImageServiceImpl } from './home-image/home-image.service';
import { HomeImageMapper } from './home-image/home-image.mapper';
import { HomeImageController } from './home-image/home-image.controller';
import { Social, SocialLink } from './social/social';
import { SocialServiceImpl } from './social/social.service';
import { SocialMapper } from './social/social.mapper';
import { SocialController } from './social/social.controller';
import { About, Skill } from './about/about';
import { AboutServiceImpl } from './about/about.service';
import { AboutMapper } from './about/about.mapper';
import { AboutController } from './about/about.controller';

@Module({
  imports: [
    TypeOrmModule.forRootAsync(databaseAsyncConfig),
    TypeOrmModule.forFeature(ContentModule.entitiesDatabase),
    CacheModule.registerAsync(cacheAsyncConfig),
  ],
  controllers: [
    ContentController,
    HomeImageController,
    SocialController,
    AboutController,
  ],
  providers: [
    { provide: 'ContentService', useClass: ContentServiceImpl },
    { provide: 'HomeImageService', useClass: HomeImageServiceImpl },
    { provide: 'SocialService', useClass: SocialServiceImpl },
    { provide: 'AboutService', useClass: AboutServiceImpl },
    ContentMapper,
    HomeImageMapper,
    SocialMapper,
    AboutMapper,
  ],
})
export class ContentModule {
  static entitiesDatabase: any[] = [
    Content,
    HomeImage,
    Social,
    SocialLink,
    About,
    Skill,
  ];
}
