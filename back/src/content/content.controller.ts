import { Body, Controller, Get, HttpStatus, Inject, Post, Res, UseInterceptors } from "@nestjs/common";
import { ContentService } from "./content.service";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { Response } from "express";
import { Content } from "./content";
import { CacheInterceptor, CacheKey } from "@nestjs/cache-manager";

@ApiTags("Page Content Endpoint")
@Controller("content")
export class ContentController {
  constructor(@Inject("ContentService") private service: ContentService) {
  }

  @Get()
  @UseInterceptors(CacheInterceptor)
  @CacheKey("contents_all")
  @ApiResponse({ status: HttpStatus.OK })
  async getAll(@Res({ passthrough: true }) res: Response) {
    res.status(HttpStatus.OK);
    return await this.service.findAll();
  }

  @Post()
  @ApiResponse({ status: HttpStatus.CREATED })
  async create(@Res() res: Response, @Body() content: Content) {
    await this.service.create(content);
    return res.status(HttpStatus.CREATED).send();
  }

}
