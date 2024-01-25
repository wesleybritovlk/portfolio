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
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { CacheInterceptor, CacheKey } from '@nestjs/cache-manager';
import { ContentService } from './content.service';
import { ContentResponse } from './content.response';
import { Content } from './content';

@ApiTags('Page Content Endpoint')
@Controller('content')
export class ContentController {
  constructor(
    @Inject('ContentService') private service: ContentService,
  ) {
  }

  @Get()
  @UseInterceptors(CacheInterceptor)
  @CacheKey('content')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'To return page content, warning contains delay due to cache.',
    type: ContentResponse,
  })
  async getContent(@Res({ passthrough: true }) res: Response) {
    res.status(HttpStatus.OK);
    return await this.service.findContent();
  }

  @Post('documents')
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'A new document will be created.',
  })
  async postDocument(@Res() res: Response) {
    await this.service.createDocument();
    return res.status(HttpStatus.CREATED).send('A new document will be created.');
  }

  @Get('documents')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'To return page content, warning contains delay due to cache.',
    type: ContentResponse,
  })
  async getDocuments(@Res({ passthrough: true }) res: Response) {
    res.status(HttpStatus.OK);
    return await this.service.findDocuments();
  }

  @Put('documents/:id')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'To update document content.',
    type: Content,
  })
  async putDocument(
    @Res() res: Response,
    @Param('id') id: string,
    @Body() document: Content,
  ) {
    await this.service.updateDocument(id, document);
    return res.status(HttpStatus.OK).send('Document content updated successfully.');
  }

  @Delete('documents/:id')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'To delete document content.',
  })
  async deleteDocument(
    @Res() res: Response,
    @Param('id') id: string,
  ) {
    await this.service.deleteDocument(id);
    return res.status(HttpStatus.OK).send('Document content deleted successfully.');
  }
}
