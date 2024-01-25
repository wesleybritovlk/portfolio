import { Body, Controller, Delete, Get, HttpStatus, Inject, Param, Post, Put, Res } from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { ProjectService } from './project.service';
import { ProjectRequest, ProjectResponse } from './project.dto';

@ApiTags('Project Endpoint')
@Controller('projects')
export class ProjectController {
  constructor(
    @Inject('ProjectService') private service: ProjectService,
  ) {
  }

  @Post()
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Project created successfully.',
  })
  @ApiBody({
    description: 'To create Project',
    type: ProjectRequest,
  })
  async post(
    @Res() res: Response,
    @Body() request: ProjectRequest,
  ) {
    await this.service.create(request);
    return res.status(HttpStatus.CREATED).send('Project created successfully.');
  }

  @Get()
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'To return Project list',
    type: ProjectResponse,
  })
  async get(
    @Res({ passthrough: true }) res: Response,
  ) {
    res.status(HttpStatus.OK);
    return await this.service.find();
  }

  @Get(':id')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'To return Project by id',
    type: ProjectResponse,
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
    description: 'Project updated successfully.',
  })
  @ApiBody({
    description: 'To update Project by id',
    type: ProjectRequest,
  })
  async put(
    @Res() res: Response,
    @Param('id') id: string,
    @Body() request: ProjectRequest,
  ) {
    await this.service.update(id, request);
    return res.status(HttpStatus.OK).send('Project updated successfully.');
  }

  @Delete(':id')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Project deleted successfully.',
  })
  async delete(
    @Res() res: Response,
    @Param('id') id: string,
  ) {
    await this.service.delete(id);
    return res.status(HttpStatus.OK).send('Project deleted successfully.');
  }
}
