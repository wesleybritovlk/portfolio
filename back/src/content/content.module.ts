import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { databaseAsyncConfig } from "../config/database.config";
import { ContentServiceImpl } from "./content.service";
import { ContentController } from "./content.controller";
import { Content } from "./content";
import { CacheModule } from "@nestjs/cache-manager";
import { cacheAsyncConfig } from "../config/cache.config";

@Module({
  imports: [
    TypeOrmModule.forRootAsync(databaseAsyncConfig),
    TypeOrmModule.forFeature(ContentModule.entitiesDatabase),
    CacheModule.registerAsync(cacheAsyncConfig)
  ],
  controllers: [ContentController],
  providers: [
    { provide: "ContentService", useClass: ContentServiceImpl }
  ]
})
export class ContentModule {
  static entitiesDatabase: any[] = [Content];
}
