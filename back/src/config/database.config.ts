import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { ContentModule } from '../content/content.module';

export const databaseAsyncConfig: TypeOrmModuleAsyncOptions = {
  useFactory: () => ({
    type: 'mongodb',
    url: process.env.DATABASE_URL,
    entities: ContentModule.entitiesDatabase,
    synchronize: true,
    logging: true,
  }),
};
