import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Content } from '../content';
import { SocialLinkRequest, SocialLinkResponse, SocialRequest, SocialResponse } from './social.dto';
import { SocialMapper } from './social.mapper';

export abstract class SocialService {
  abstract save(request: SocialRequest): Promise<Content>

  abstract find(): Promise<SocialResponse>

  abstract update(request: SocialRequest): Promise<Content>

  abstract createLink(request: SocialLinkRequest): Promise<Content>

  abstract findLink(id: string): Promise<SocialLinkResponse>

  abstract updateLink(id: string, request: SocialLinkRequest): Promise<Content>

  abstract deleteLink(id: string): Promise<Content>
}

@Injectable()
export class SocialServiceImpl implements SocialService {
  constructor(
    private mapper: SocialMapper,
    @InjectRepository(Content) private repository: Repository<Content>,
  ) {
  }

  findContent = (): Promise<Content> => this.repository.findOne({});

  async save(request: SocialRequest): Promise<Content> {
    let content = await this.findContent();
    content.social = this.mapper.toModel(request);
    return this.repository.save(content);
  }

  async find(): Promise<SocialResponse> {
    let content = await this.findContent();
    return this.mapper.toResponse(content.social);
  }

  async update(request: SocialRequest): Promise<Content> {
    let content = await this.findContent();
    content.social = this.mapper.toModelUpdate(content.social, request);
    return this.repository.save(content);
  }

  async createLink(request: SocialLinkRequest): Promise<Content> {
    let content = await this.findContent();
    if (!content.social.links) content.social.links = [];
    content.social.links.push(this.mapper.toModelLink(request));
    return this.repository.save(content);
  }

  async findLink(id: string): Promise<SocialLinkResponse> {
    let content = await this.findContent();
    let link = content.social.links.find(link => link.id === id);
    return this.mapper.toResponseLink(link);
  }

  async updateLink(id: string, request: SocialLinkRequest): Promise<Content> {
    let content = await this.findContent();
    content.social.links = content.social.links.map(link =>
      link.id === id ? this.mapper.toModelUpdateLink(link, request) : link);
    return this.repository.save(content);
  }

  async deleteLink(id: string): Promise<Content> {
    let content = await this.findContent();
    content.social.links = content.social.links.filter(link => link.id !== id);
    return this.repository.save(content);
  }
}
