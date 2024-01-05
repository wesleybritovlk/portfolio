import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HomeImageRequest, HomeImageResponse } from './home-image.dto';
import { Content } from '../content';
import { HomeImageMapper } from './home-image.mapper';

export abstract class HomeImageService {
  abstract save(request: HomeImageRequest): Promise<Content>;

  abstract find(): Promise<HomeImageResponse>;
}

@Injectable()
export class HomeImageServiceImpl implements HomeImageService {
  constructor(
    private mapper: HomeImageMapper,
    @InjectRepository(Content) private repository: Repository<Content>,
  ) {
  }

  async save(request: HomeImageRequest): Promise<Content> {
    let content = await this.repository.findOne(undefined);
    content.homeImage = this.mapper.toModel(request);
    return this.repository.save(content);
  }

  async find(): Promise<HomeImageResponse> {
    let content = await this.repository.findOne(undefined);
    return this.mapper.toResponse(content.homeImage);
  }
}

