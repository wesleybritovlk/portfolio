import { Module } from '@nestjs/common';
import { FormModule } from './form/form.module';
import { ConfigModule } from '@nestjs/config';
import { ContentModule } from './content/content.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    FormModule,
    ContentModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {
}
