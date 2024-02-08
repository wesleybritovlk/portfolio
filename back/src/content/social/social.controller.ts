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
import { SocialService } from './social.service';
import { SocialRequest, SocialResponse } from './social.dto';
import { CommonController } from '../../common/common.controller';
import { CacheKey } from '@nestjs/common/cache';
import { CacheInterceptor } from '@nestjs/cache-manager';

@ApiTags('Social Endpoint')
@Controller('socials')
export class SocialController
  implements CommonController<SocialRequest, SocialResponse> {
  constructor(
    @Inject('SocialService') private service: SocialService,
  ) {
  }

  @Post()
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Social link List empty and email created successfully.',
  })
  @ApiBody({
    description: 'To create Social link list and add email',
    type: SocialRequest,
  })
  async post(@Res() res: Response,
             @Body() request: SocialRequest) {
    await this.service.create(request);
    return res.status(HttpStatus.CREATED).send('Social link List empty and email created successfully.');
  }

  @Get()
  @UseInterceptors(CacheInterceptor)
  @CacheKey('social_all')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'To return Social link list and email',
    type: SocialResponse,
  })
  async get(@Res({ passthrough: true }) res: Response) {
    res.status(HttpStatus.OK);
    return await this.service.find();
  }

  @Get(':id')
  @UseInterceptors(CacheInterceptor)
  @CacheKey('social_id')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'To return Social by id',
    type: SocialResponse,
  })
  async getById(@Res({ passthrough: true }) res: Response,
                @Param('id') id: string): Promise<SocialResponse> {
    res.status(HttpStatus.OK);
    return await this.service.findOne(id);
  }

  @Put(':id')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Social email updated successfully.',
  })
  @ApiBody({
    description: 'To update Social email',
    type: SocialRequest,
  })
  async put(@Res() res: Response,
            @Param('id') id: string,
            @Body() request: SocialRequest) {
    await this.service.update(id, request);
    return res.status(HttpStatus.OK).send('Social email updated successfully.');
  }

  @Delete(':id')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Social deleted successfully.',
  })
  async delete(@Res() res: Response,
               @Param('id') id: string): Promise<Response> {
    await this.service.delete(id);
    return res.status(HttpStatus.OK).send('Social deleted successfully.');
  }
}
