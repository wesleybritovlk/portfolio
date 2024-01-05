import { CacheModuleAsyncOptions } from '@nestjs/cache-manager';

export const cacheAsyncConfig: CacheModuleAsyncOptions = {
  useFactory: () => ({
    ttl: 300000,
  }),
};