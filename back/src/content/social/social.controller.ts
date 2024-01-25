import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Body, Controller, Delete, Get, HttpStatus, Inject, Param, Post, Put, Res } from '@nestjs/common';
import { Response } from 'express';
import { SocialService } from './social.service';
import { SocialLinkRequest, SocialLinkResponse, SocialRequest, SocialResponse } from './social.dto';

@ApiTags('Social Endpoint')
@Controller('content/social')
export class SocialController {
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
  async post(@Res() res: Response, @Body() request: SocialRequest) {
    await this.service.save(request);
    return res.status(HttpStatus.CREATED).send('Social link List empty and email created successfully.');
  }

  @Get()
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'To return Social link list and email',
    type: SocialResponse,
  })
  async get(@Res({ passthrough: true }) res: Response) {
    res.status(HttpStatus.OK);
    return await this.service.find();
  }

  @Put()
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Social email updated successfully.',
  })
  @ApiBody({
    description: 'To update Social email',
    type: SocialRequest,
  })
  async put(@Res() res: Response, @Body() request: SocialRequest) {
    await this.service.update(request);
    return res.status(HttpStatus.OK).send('Social email updated successfully.');
  }

  @Post('links')
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Social link created successfully.',
  })
  @ApiBody({
    description: 'To create Social link',
    type: SocialLinkRequest,
  })
  async postLink(
    @Res() res: Response,
    @Body() request: SocialLinkRequest,
  ) {
    await this.service.createLink(request);
    return res.status(HttpStatus.CREATED).send('Social link created successfully.');
  }

  @Get('links/:id')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'To return Social link by id',
    type: SocialLinkResponse,
  })
  async getLink(
    @Res({ passthrough: true }) res: Response,
    @Param('id') id: string,
  ) {
    res.status(HttpStatus.OK);
    return await this.service.findLink(id);
  }

  @Put('links/:id')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Social link updated successfully.',
  })
  @ApiBody({
    description: 'To update Social link by id',
    type: SocialLinkRequest,
  })
  async putLink(
    @Res() res: Response,
    @Param('id') id: string,
    @Body() request: SocialLinkRequest,
  ) {
    await this.service.updateLink(id, request);
    return res.status(HttpStatus.OK).send('Social link updated successfully.');
  }

  @Delete('links/:id')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Social link deleted successfully.',
  })
  async deleteLink(
    @Res() res: Response,
    @Param('id') id: string,
  ) {
    await this.service.deleteLink(id);
    return res.status(HttpStatus.OK).send('Social link deleted successfully.');
  }
}
