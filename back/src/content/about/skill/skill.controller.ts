import { Response } from 'express';
import { CommonController } from '../../../common/common.controller';
import { SkillRequest, SkillResponse } from './skill.dto';
import { SkillService } from './skill.service';
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
import { CacheInterceptor } from '@nestjs/cache-manager';
import { CacheKey } from '@nestjs/common/cache';

@ApiTags('Skill Endpoint')
@Controller('abouts/:about_id/skills')
export class SkillController
  implements CommonController<SkillRequest, SkillResponse> {

  constructor(
    @Inject('SkillService') private service: SkillService,
  ) {
  }

  @Post()
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Skill created successfully.',
  })
  @ApiBody({
    description: 'To create Skill',
    type: SkillRequest,
  })
  async post(
    @Res() res: Response,
    @Body() request: SkillRequest,
    @Param('about_id') parentId?: string,
  ): Promise<Response> {
    await this.service.create(request, parentId);
    return res.status(HttpStatus.CREATED).send('Skill created successfully.');
  }

  @Get()
  @UseInterceptors(CacheInterceptor)
  @CacheKey('skill_all')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'To return Skill list',
    type: SkillResponse,
  })
  async get(
    @Res({ passthrough: true }) res: Response,
    @Param('about_id') parentId?: string,
  ): Promise<SkillResponse[]> {
    res.status(HttpStatus.OK);
    return await this.service.find(parentId);
  }

  @Get(':id')
  @UseInterceptors(CacheInterceptor)
  @CacheKey('skill_id')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'To update Skill by id',
    type: SkillResponse,
  })
  async getById(
    @Res({ passthrough: true }) res: Response,
    @Param('id') id: string,
    @Param('about_id') parentId?: string,
  ): Promise<SkillResponse> {
    res.status(HttpStatus.OK);
    return await this.service.findOne(id, parentId);
  }

  @Put(':id')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Skill updated successfully.',
  })
  @ApiBody({
    description: 'To update Skill by id',
    type: SkillRequest,
  })
  async put(
    @Res() res: Response,
    @Param('id') id: string,
    @Body() request: SkillRequest,
    @Param('about_id') parentId?: string,
  ): Promise<Response> {
    await this.service.update(id, request, parentId);
    return res.status(HttpStatus.OK).send('Skill updated successfully.');
  }

  @Delete(':id')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Skill deleted successfully.',
  })
  async delete(
    @Res() res: Response,
    @Param('id') id: string,
    @Param('about_id') parentId?: string,
  ): Promise<Response> {
    await this.service.delete(id, parentId);
    return res.status(HttpStatus.OK).send('Skill deleted successfully.');
  }
}