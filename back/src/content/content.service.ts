import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Content } from './content';
import { ContentResponse } from './content.response';
import { ContentMapper } from './content.mapper';

export abstract class ContentService {
  abstract findContent(): Promise<ContentResponse>;

  abstract createDocument(): Promise<Content>;

  abstract findDocuments(): Promise<Content[]>;

  abstract updateDocument(id: string, document: Content): Promise<UpdateResult>;

  abstract deleteDocument(id: string): Promise<DeleteResult>;
}

@Injectable()
export class ContentServiceImpl implements ContentService {
  constructor(
    private mapper: ContentMapper,
    @InjectRepository(Content) private repository: Repository<Content>,
  ) {
  }

  async findContent(): Promise<ContentResponse> {
    let content = await this.repository.findOne({});
    return this.mapper.toResponse(content);
  }

  async createDocument(): Promise<Content> {
    return this.repository.save(new Content());
  }

  async findDocuments(): Promise<Content[]> {
    return await this.repository.find({});
  }

  async updateDocument(id: string, document: Content): Promise<UpdateResult> {
    return await this.repository.update(id, document);
  }

  async deleteDocument(id: string): Promise<DeleteResult> {
    return await this.repository.delete(id);
  }
}
