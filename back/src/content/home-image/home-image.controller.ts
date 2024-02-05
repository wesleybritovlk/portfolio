import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
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
import { Response } from 'express';
import { HomeImageService } from './home-image.service';
import { HomeImageRequest, HomeImageResponse } from './home-image.dto';
import { CommonController } from '../../common/common.controller';
import { CacheInterceptor } from '@nestjs/cache-manager';
import { CacheKey } from '@nestjs/common/cache';

@ApiTags('Home Image Endpoint')
@Controller('home_images')
export class HomeImageController
  implements CommonController<HomeImageRequest, HomeImageResponse> {
  constructor(
    @Inject('HomeImageService') private service: HomeImageService,
  ) {
  }

  @Post()
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Home image created successfully.',
  })
  @ApiBody({
    description: 'To create Home image',
    type: HomeImageRequest,
  })
  async post(@Res() res: Response, @Body() request: HomeImageRequest) {
    await this.service.create(request);
    return res.status(HttpStatus.CREATED).send('Home image created successfully.');
  }

  @Get()
  @UseInterceptors(CacheInterceptor)
  @CacheKey('home-image_all')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'to return Home images.',
    type: HomeImageResponse,
  })
  async get(@Res({ passthrough: true }) res: Response) {
    res.status(HttpStatus.OK);
    return await this.service.find();
  }


  @Get(':id')
  @UseInterceptors(CacheInterceptor)
  @CacheKey('home-image_id')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'To return Home image by id',
    type: HomeImageResponse,
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
    description: 'Home image updated successfully.',
  })
  @ApiBody({
    description: 'To update Home image by id',
    type: HomeImageRequest,
  })
  async put(
    @Res() res: Response,
    @Param('id') id: string,
    @Body() request: HomeImageRequest,
  ) {
    await this.service.update(id, request);
    return res.status(HttpStatus.OK).send('Home image updated successfully.');
  }

  @Delete(':id')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Home image deleted successfully.',
  })
  async delete(
    @Res() res: Response,
    @Param('id') id: string,
  ) {
    await this.service.delete(id);
    return res.status(HttpStatus.OK).send('Home image deleted successfully.');
  }
}
