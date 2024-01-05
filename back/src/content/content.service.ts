import { Injectable } from '@nestjs/common';
import { Content } from './content';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContentResponse } from './content.response';
import { ContentMapper } from './content.mapper';

export abstract class ContentService {
  abstract create(): Promise<Content>;

  abstract find(): Promise<ContentResponse>;
}

@Injectable()
export class ContentServiceImpl implements ContentService {
  constructor(
    private mapper: ContentMapper,
    @InjectRepository(Content) private repository: Repository<Content>,
  ) {
  }

  async create(): Promise<Content> {
    return this.repository.save(new Content());
  }

  async find(): Promise<ContentResponse> {
    let content = await this.repository.findOne(undefined);
    return this.mapper.toResponse(content);
  }
}
