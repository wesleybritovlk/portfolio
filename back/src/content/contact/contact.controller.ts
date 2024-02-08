import { ApiBody, ApiResponse, ApiTags } from "@nestjs/swagger";
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
  UseInterceptors
} from "@nestjs/common";
import { ContactService } from "./contact.service";
import { ContactRequest, ContactResponse } from "./contact.dto";
import { CommonController } from "../../common/common.controller";
import { Response } from "express";
import { CacheInterceptor } from "@nestjs/cache-manager";
import { CacheKey } from "@nestjs/common/cache";

@ApiTags("Contact Endpoint")
@Controller("contacts")
export class ContactController
  implements CommonController<ContactRequest, ContactResponse> {
  constructor(
    @Inject("ContactService") private service: ContactService
  ) {
  }

  @Post()
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: "Contact and GitHub created successfully."
  })
  @ApiBody({
    description: "To create Contact and GitHub",
    type: ContactRequest
  })
  async post(@Res() res: Response,
             @Body() request: ContactRequest): Promise<Response> {
    await this.service.create(request);
    return res.status(HttpStatus.CREATED).send("Contact and GitHub created successfully.");
  }

  @Get()
  @UseInterceptors(CacheInterceptor)
  @CacheKey("contact_all")
  @ApiResponse({
    status: HttpStatus.OK,
    description: "to return Contact and GitHub.",
    type: ContactResponse
  })
  async get(@Res({ passthrough: true }) res: Response): Promise<ContactResponse[]> {
    res.status(HttpStatus.OK);
    return await this.service.find();
  }

  @Get(":id")
  @UseInterceptors(CacheInterceptor)
  @CacheKey("contact_id")
  @ApiResponse({
    status: HttpStatus.OK,
    description: "To return Contact and GitHub by id",
    type: ContactResponse
  })
  async getById(@Res({ passthrough: true }) res: Response,
                @Param("id") id: string): Promise<ContactResponse> {
    res.status(HttpStatus.OK);
    return await this.service.findOne(id);
  }

  @Put(":id")
  @ApiResponse({
    status: HttpStatus.OK,
    description: "Contact and GitHub updated successfully."
  })
  @ApiBody({
    description: "To update Contact and GitHub",
    type: ContactRequest
  })
  async put(@Res() res: Response,
            @Param("id") id: string,
            @Body() request: ContactRequest): Promise<Response> {
    await this.service.update(id, request);
    return res.status(HttpStatus.OK).send("Contact and GitHub updated successfully.");
  }

  @Delete(":id")
  @ApiResponse({
    status: HttpStatus.OK,
    description: "Contact and GitHub deleted successfully."
  })
  async delete(@Res() res: Response,
               @Param("id") id: string): Promise<Response> {
    await this.service.delete(id);
    return res.status(HttpStatus.OK).send("Contact and GitHub deleted successfully.");
  }
}
