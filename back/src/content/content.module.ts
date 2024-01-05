import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseAsyncConfig } from '../config/database.config';
import { ContentServiceImpl } from './content.service';
import { ContentController } from './content.controller';
import { Content } from './content';
import { CacheModule } from '@nestjs/cache-manager';
import { cacheAsyncConfig } from '../config/cache.config';
import { HomeImage } from './home-image/home-image';
import { HomeImageServiceImpl } from './home-image/home-image.service';
import { HomeImageController } from './home-image/home-image.controller';
import { ContentMapper } from './content.mapper';
import { HomeImageMapper } from './home-image/home-image.mapper';

@Module({
  imports: [
    TypeOrmModule.forRootAsync(databaseAsyncConfig),
    TypeOrmModule.forFeature(ContentModule.entitiesDatabase),
    CacheModule.registerAsync(cacheAsyncConfig),
  ],
  controllers: [ContentController, HomeImageController],
  providers: [
    { provide: 'HomeImageService', useClass: HomeImageServiceImpl },
    { provide: 'ContentService', useClass: ContentServiceImpl },
    HomeImageMapper,
    ContentMapper,
  ],
})
export class ContentModule {
  static entitiesDatabase: any[] = [Content, HomeImage];
}
