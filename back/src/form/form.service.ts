import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { FormRequest } from './form-request';

export abstract class FormService {
  abstract create(request: FormRequest): Promise<void>;
}

@Injectable()
export class FormServiceImpl implements FormService {
  constructor(private mailerService: MailerService) {
  }

  async create(request: FormRequest): Promise<void> {
    await this.mailerService.sendMail({
      replyTo: `FROM <${request.email}>`,
      subject: `PORTFOLIO: Email sent by: ${request.first_name} ${request.last_name} - ${request.email}`,
      text: `${request.message}`,
    }).catch((err) => console.error(err));
  }
}
