import { Body, Controller, HttpStatus, Inject, Post, Res } from '@nestjs/common';
import { FormService } from './form.service';
import { FormRequest } from './form-request';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';

@ApiTags('Email Form Endpoint')
@Controller('form')
export class FormController {
  constructor(@Inject('FormService') private service: FormService) {
  }

  @Post()
  @ApiResponse({ status: HttpStatus.ACCEPTED, description: 'The email has been registered and will be sent.' })
  @ApiBody({
    description: 'Form for sending email',
    type: FormRequest,
  })
  async post(@Res() res: Response<string>, @Body() request: FormRequest) {
    await this.service.create(request);
    return res.status(HttpStatus.ACCEPTED).send('The email has been registered and will be sent.');
  }
}
