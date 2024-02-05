import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { ContentModule } from '../content/content.module';

export const databaseAsyncConfig: TypeOrmModuleAsyncOptions = {
  useFactory: () => ({
    type: 'postgres',
    url: process.env.DB_URL,
    synchronize: true,
    logging: true,
    autoLoadEntities: true,
  }),
};
