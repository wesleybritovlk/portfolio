import { Body, Controller, Delete, Get, HttpStatus, Inject, Param, Post, Put, Res } from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AboutService } from './about.service';
import { Response } from 'express';
import { AboutRequest, AboutResponse, SkillRequest, SkillResponse } from './about.dto';

@ApiTags('About Endpoint')
@Controller('content/about')
export class AboutController {
  constructor(
    @Inject('AboutService') private service: AboutService,
  ) {
  }

  @Post()
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'About description and skill List empty created successfully.',
  })
  @ApiBody({
    description: 'To create About description and skill list',
    type: AboutRequest,
  })
  async post(@Res() res: Response, @Body() request: AboutRequest) {
    await this.service.save(request);
    return res.status(HttpStatus.CREATED).send('About description and skill List empty created successfully.');
  }

  @Get()
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'To return About description and skill list',
    type: AboutResponse,
  })
  async get(@Res({ passthrough: true }) res: Response) {
    res.status(HttpStatus.OK);
    return await this.service.find();
  }

  @Put()
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'About description updated successfully.',
  })
  @ApiBody({
    description: 'To update About description',
    type: AboutRequest,
  })
  async put(@Res() res: Response, @Body() request: AboutRequest) {
    await this.service.update(request);
    return res.status(HttpStatus.OK).send('About description updated successfully.');
  }

  @Post('skills')
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'About skill created successfully.',
  })
  @ApiBody({
    description: 'To create About skill',
    type: SkillRequest,
  })
  async postSkill(
    @Res() res: Response,
    @Body() request: SkillRequest,
  ) {
    await this.service.createSkill(request);
    return res.status(HttpStatus.CREATED).send('About skill created successfully.');
  }

  @Get('skills/:id')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'To return About skill by id',
    type: SkillResponse,
  })
  async getSkill(
    @Res({ passthrough: true }) res: Response,
    @Param('id') id: string,
  ) {
    res.status(HttpStatus.OK);
    return await this.service.findSkill(id);
  }

  @Put('skills/:id')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'About skill updated successfully.',
  })
  @ApiBody({
    description: 'To update About skill by id',
    type: SkillRequest,
  })
  async putSkill(
    @Res() res: Response,
    @Param('id') id: string,
    @Body() request: SkillRequest,
  ) {
    await this.service.updateSkill(id, request);
    return res.status(HttpStatus.OK).send('About skill updated successfully.');
  }

  @Delete('skills/:id')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'About skill deleted successfully.',
  })
  async deleteSkill(
    @Res() res: Response,
    @Param('id') id: string,
  ) {
    await this.service.deleteSkill(id);
    return res.status(HttpStatus.OK).send('About skill deleted successfully.');
  }
}
