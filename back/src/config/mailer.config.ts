import { MailerAsyncOptions } from "@nestjs-modules/mailer/dist/interfaces/mailer-async-options.interface";

export const mailerAsyncConfig: MailerAsyncOptions = {
  useFactory: () => ({
    transport: {
      host: process.env.MAILER_HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAILER_USER,
        pass: process.env.MAILER_PASS
      }
    },
    defaults: {
      to: process.env.MAILER_USER,
      from: `PORTFOLIO No Reply <noreply>`
    }
  })
};
