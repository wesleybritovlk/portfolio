import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Body, Controller, Delete, Get, HttpStatus, Inject, Param, Post, Put, Res } from '@nestjs/common';
import { CertificateService } from './certificate.service';
import { Response } from 'express';
import { CertificateRequest, CertificateResponse } from './certificate.dto';

@ApiTags('Certificate Endpoint')
@Controller('certificates')
export class CertificateController {
  constructor(
    @Inject('CertificateService') private service: CertificateService,
  ) {
  }

  @Post()
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Certificate created successfully.',
  })
  @ApiBody({
    description: 'To create Certificate',
    type: CertificateRequest,
  })
  async post(
    @Res() res: Response,
    @Body() request: CertificateRequest,
  ) {
    await this.service.create(request);
    return res.status(HttpStatus.CREATED).send('Certificate created successfully.');
  }

  @Get()
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'To return Certificate list',
    type: CertificateResponse,
  })
  async get(
    @Res({ passthrough: true }) res: Response,
  ) {
    res.status(HttpStatus.OK);
    return await this.service.find();
  }

  @Get(':id')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'To return Certificate by id',
    type: CertificateResponse,
  })
  async getById(
    @Res({ passthrough: true }) res: Response,
    @Param('id') id: string,
  ) {
    res.status(HttpStatus.OK);
    return await this.service.findOne(id);
  }

  @Put(':id')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Certificate updated successfully.',
  })
  @ApiBody({
    description: 'To update Certificate by id',
    type: CertificateRequest,
  })
  async put(
    @Res() res: Response,
    @Param('id') id: string,
    @Body() request: CertificateRequest,
  ) {
    await this.service.update(id, request);
    return res.status(HttpStatus.OK).send('Certificate updated successfully.');
  }

  @Delete(':id')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Certificate deleted successfully.',
  })
  async delete(
    @Res() res: Response,
    @Param('id') id: string,
  ) {
    await this.service.delete(id);
    return res.status(HttpStatus.OK).send('Certificate deleted successfully.');
  }
}
