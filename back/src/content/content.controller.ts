import { Controller, Get, HttpStatus, Inject, Post, Res, UseInterceptors } from '@nestjs/common';
import { ContentService } from './content.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { CacheInterceptor, CacheKey } from '@nestjs/cache-manager';

@ApiTags('Page Content Endpoint')
@Controller('content')
export class ContentController {
  constructor(
    @Inject('ContentService') private service: ContentService,
  ) {
  }

  @Get()
  @UseInterceptors(CacheInterceptor)
  @CacheKey('contents_all')
  @ApiResponse({ status: HttpStatus.OK })
  async get(@Res({ passthrough: true }) res: Response) {
    res.status(HttpStatus.OK);
    return await this.service.find();
  }

  @Post()
  @ApiResponse({ status: HttpStatus.CREATED })
  async create(@Res() res: Response) {
    await this.service.create();
    return res.status(HttpStatus.CREATED).send('A new document will be created');
  }
}
