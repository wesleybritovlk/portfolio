import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Body, Controller, Get, HttpStatus, Inject, Put, Res } from '@nestjs/common';
import { HomeImageService } from './home-image.service';
import { Response } from 'express';
import { HomeImageRequest } from './home-image.dto';

@ApiTags('Home Image Endpoint')
@Controller('content/home_image')
export class HomeImageController {
  constructor(
    @Inject('HomeImageService') private service: HomeImageService,
  ) {
  }

  @Get()
  @ApiResponse({ status: HttpStatus.OK })
  async get(@Res({ passthrough: true }) res: Response) {
    res.status(HttpStatus.OK);
    return await this.service.find();
  }

  @Put()
  @ApiResponse({ status: HttpStatus.OK })
  async save(@Res() res: Response, @Body() request: HomeImageRequest) {
    await this.service.save(request);
    return res.status(HttpStatus.OK).send();
  }
}
