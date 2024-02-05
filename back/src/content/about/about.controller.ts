import { Response } from 'express';
import { CommonController } from '../../common/common.controller';
import { AboutRequest, AboutResponse } from './about.dto';
import { AboutService } from './about.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Inject,
  Param,
  Post,
  Put,
  Res,
  UseInterceptors,
} from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CacheInterceptor } from '@nestjs/cache-manager';
import { CacheKey } from '@nestjs/common/cache';

@ApiTags('About Endpoint')
@Controller('abouts')
export class AboutController
  implements CommonController<AboutRequest, AboutResponse> {
  constructor(
    @Inject('AboutService') private service: AboutService,
  ) {
  }

  @Post()
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'About created successfully.',
  })
  @ApiBody({
    description: 'To create About',
    type: AboutRequest,
  })
  async post(
    @Res() res: Response,
    @Body() request: AboutRequest,
  ): Promise<Response> {
    await this.service.create(request);
    return res.status(HttpStatus.CREATED).send('About created successfully.');
  }

  @Get()
  @UseInterceptors(CacheInterceptor)
  @CacheKey('about_all')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'To return About list',
    type: AboutResponse,
  })
  async get(
    @Res({ passthrough: true }) res: Response,
  ): Promise<AboutResponse[]> {
    res.status(HttpStatus.OK);
    return await this.service.find();
  }

  @Get(':id')
  @UseInterceptors(CacheInterceptor)
  @CacheKey('about_id')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'To update About by id',
    type: AboutResponse,
  })
  async getById(
    @Res({ passthrough: true }) res: Response,
    @Param('id') id: string,
  ): Promise<AboutResponse> {
    res.status(HttpStatus.OK);
    return await this.service.findOne(id);
  }

  @Put(':id')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'About updated successfully.',
  })
  @ApiBody({
    description: 'To update About by id',
    type: AboutRequest,
  })
  async put(
    @Res() res: Response,
    @Param('id') id: string,
    @Body() request: AboutRequest,
  ): Promise<Response> {
    await this.service.update(id, request);
    return res.status(HttpStatus.OK).send('About description updated successfully.');
  }

  @Delete(':id')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'About deleted successfully.',
  })
  async delete(
    @Res() res: Response,
    @Param('id') id: string,
  ): Promise<Response> {
    await this.service.delete(id);
    return res.status(HttpStatus.OK).send('About deleted successfully.');
  }
}
