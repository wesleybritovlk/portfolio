import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Content } from '../content';
import { AboutRequest, AboutResponse, SkillRequest, SkillResponse } from './about.dto';
import { AboutMapper } from './about.mapper';

export abstract class AboutService {
  abstract save(request: AboutRequest): Promise<Content>

  abstract find(): Promise<AboutResponse>

  abstract update(request: AboutRequest): Promise<Content>

  abstract createSkill(request: SkillRequest): Promise<Content>

  abstract findSkill(id: string): Promise<SkillResponse>

  abstract updateSkill(id: string, request: SkillRequest): Promise<Content>

  abstract deleteSkill(id: string): Promise<Content>
}

@Injectable()
export class AboutServiceImpl implements AboutService {
  constructor(
    private mapper: AboutMapper,
    @InjectRepository(Content) private repository: Repository<Content>,
  ) {
  }

  findContent = (): Promise<Content> => this.repository.findOne({});

  async save(request: AboutRequest): Promise<Content> {
    let content = await this.findContent();
    content.about = this.mapper.toModel(request);
    return this.repository.save(content);
  }

  async find(): Promise<AboutResponse> {
    let content = await this.findContent();
    return this.mapper.toResponse(content.about);
  }

  async update(request: AboutRequest): Promise<Content> {
    let content = await this.findContent();
    content.about = this.mapper.toModelUpdate(content.about, request);
    return this.repository.save(content);
  }

  async createSkill(request: SkillRequest): Promise<Content> {
    let content = await this.findContent();
    if (!content.about.skillls) content.about.skillls = [];
    content.about.skillls.push(this.mapper.toModelSkill(request));
    return this.repository.save(content);
  }

  async findSkill(id: string): Promise<SkillResponse> {
    let content = await this.findContent();
    let skill = content.about.skillls.find(skill => skill.id === id);
    return this.mapper.toResponseSkill(skill);
  }

  async updateSkill(id: string, request: SkillRequest): Promise<Content> {
    let content = await this.findContent();
    content.about.skillls = content.about.skillls.map(skill =>
      skill.id === id ? this.mapper.toModelUpdateSkill(skill, request) : skill);
    return this.repository.save(content);
  }

  async deleteSkill(id: string): Promise<Content> {
    let content = await this.findContent();
    content.about.skillls = content.about.skillls.filter(skill => skill.id !== id);
    return this.repository.save(content);
  }
}
