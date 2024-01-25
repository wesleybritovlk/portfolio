import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Body, Controller, Get, HttpStatus, Inject, Put, Res } from '@nestjs/common';
import { ContactService } from './contact.service';
import { Response } from 'express';
import { ContactRequest, ContactResponse } from './contact.dto';

@ApiTags('Contact Endpoint')
@Controller('content/contact')
export class ContactController {
  constructor(
    @Inject('ContactService') private service: ContactService,
  ) {
  }

  @Get()
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'to return Contact data and GitHub repository.',
    type: ContactResponse,
  })
  async get(@Res({ passthrough: true }) res: Response) {
    res.status(HttpStatus.OK);
    return await this.service.find();
  }

  @Put()
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Contact data and GitHub repository have been updated successfully.',
  })
  @ApiBody({
    description: 'To update contact data and GitHub repository',
    type: ContactRequest,
  })
  async save(@Res() res: Response, @Body() request: ContactRequest) {
    await this.service.save(request);
    return res.status(HttpStatus.OK).send('Contact data and GitHub repository have been updated successfully.');
  }
}