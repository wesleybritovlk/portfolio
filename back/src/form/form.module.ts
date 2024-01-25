import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { mailerAsyncConfig } from '../config/mailer.config';
import { FormServiceImpl } from './form.service';
import { FormController } from './form.controller';

@Module({
  imports: [
    MailerModule.forRootAsync(mailerAsyncConfig),
  ],
  controllers: [FormController],
  providers: [{
    provide: 'FormService',
    useClass: FormServiceImpl,
  }],
})
export class FormModule {
}
