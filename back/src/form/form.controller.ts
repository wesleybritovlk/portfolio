import { Body, Controller, HttpStatus, Inject, Post, Res } from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { FormService } from './form.service';
import { FormRequest } from './form-request';

@ApiTags('Email Form Endpoint')
@Controller('forms')
export class FormController {
  constructor(@Inject('FormService') private service: FormService) {
  }

  @Post()
  @ApiResponse({
    status: HttpStatus.ACCEPTED,
    description: 'The email has been registered and will be sent.',
  })
  @ApiBody({
    description: 'To send email form.',
    type: FormRequest,
  })
  async post(@Res() res: Response<string>, @Body() request: FormRequest) {
    await this.service.create(request);
    return res.status(HttpStatus.ACCEPTED).send('The email has been registered and will be sent.');
  }
}
