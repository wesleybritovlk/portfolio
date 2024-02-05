import { TypeOrmModuleAsyncOptions } from "@nestjs/typeorm";

export const databaseAsyncConfig: TypeOrmModuleAsyncOptions = {
  useFactory: () => ({
    type: "postgres",
    url: process.env.DB_URL,
    synchronize: true,
    logging: true,
    autoLoadEntities: true
  })
};
