import { CacheModuleAsyncOptions } from '@nestjs/cache-manager';
import { redisStore } from 'cache-manager-redis-store';

export const cacheAsyncConfig: CacheModuleAsyncOptions = {
  useFactory: async () => ({
    store: redisStore,
    url: process.env.CACHE_URL,
    ttl: 300000,
  }),
};
