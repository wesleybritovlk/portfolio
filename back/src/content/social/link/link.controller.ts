import { Response } from 'express';
import { LinkRequest, LinkResponse } from './link.dto';
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
import { LinkService } from './link.service';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CommonController } from '../../../common/common.controller';
import { CacheInterceptor } from '@nestjs/cache-manager';
import { CacheKey } from '@nestjs/common/cache';

@ApiTags('Link Endpoint')
@Controller('socials/:social_id/links')
export class LinkController
  implements CommonController<LinkRequest, LinkResponse> {
  constructor(@Inject('LinkService') private service: LinkService) {
  }

  @Post()
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Link created successfully.',
  })
  @ApiBody({
    description: 'To create Link',
    type: LinkRequest,
  })
  async post(@Res() res: Response,
             @Body() request: LinkRequest,
             @Param('social_id') parentId?: string): Promise<Response> {
    await this.service.create(request, parentId);
    return res.status(HttpStatus.CREATED).send('Link created successfully.');
  }

  @Get()
  @UseInterceptors(CacheInterceptor)
  @CacheKey('link_all')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'To return Link list',
    type: LinkResponse,
  })
  async get(
    @Res({ passthrough: true }) res: Response,
    @Param('social_id') parentId?: string,
  ): Promise<LinkResponse[]> {
    res.status(HttpStatus.OK);
    return await this.service.find(parentId);
  }

  @Get(':id')
  @UseInterceptors(CacheInterceptor)
  @CacheKey('link_id')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'To return Link by id',
    type: LinkResponse,
  })
  async getById(@Res({ passthrough: true }) res: Response,
                @Param('id') id: string,
                @Param('social_id') parentId?: string): Promise<LinkResponse> {
    res.status(HttpStatus.OK);
    return await this.service.findOne(id, parentId);
  }

  @Put(':id')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Link updated successfully.',
  })
  @ApiBody({
    description: 'To update Link by id',
    type: LinkRequest,
  })
  async put(@Res() res: Response,
            @Param('id') id: string,
            @Body() request: LinkRequest,
            @Param('social_id') parentId?: string): Promise<Response> {
    await this.service.update(id, request, parentId);
    return res.status(HttpStatus.OK).send('Link updated successfully.');
  }

  @Delete(':id')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Link deleted successfully.',
  })
  async delete(@Res() res: Response,
               @Param('id') id: string,
               @Param('social_id') parentId?: string): Promise<Response> {
    await this.service.delete(id, parentId);
    return res.status(HttpStatus.OK).send('Link deleted successfully.');
  }
}
