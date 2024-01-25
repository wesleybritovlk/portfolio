import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Body, Controller, Get, HttpStatus, Inject, Put, Res } from '@nestjs/common';
import { Response } from 'express';
import { HomeImageService } from './home-image.service';
import { HomeImageRequest, HomeImageResponse } from './home-image.dto';

@ApiTags('Home Image Endpoint')
@Controller('content/home_image')
export class HomeImageController {
  constructor(
    @Inject('HomeImageService') private service: HomeImageService,
  ) {
  }

  @Get()
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'to return profile image url and its self-description.',
    type: HomeImageResponse,
  })
  async get(@Res({ passthrough: true }) res: Response) {
    res.status(HttpStatus.OK);
    return await this.service.find();
  }

  @Put()
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Profile image and self-description have been updated successfully.',
  })
  @ApiBody({
    description: 'To update profile image url and its self-description',
    type: HomeImageRequest,
  })
  async save(@Res() res: Response, @Body() request: HomeImageRequest) {
    await this.service.save(request);
    return res.status(HttpStatus.OK).send('Profile image and self-description have been updated successfully.');
  }
}
