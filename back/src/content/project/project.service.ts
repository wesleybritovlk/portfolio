import { Injectable } from '@nestjs/common';
import { Content } from '../content';
import { ProjectMapper } from './project.mapper';
import { ProjectRequest, ProjectResponse } from './project.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

export abstract class ProjectService {
  abstract create(request: ProjectRequest): Promise<Content>;

  abstract find(): Promise<ProjectResponse[]>;

  abstract findOne(id: string): Promise<ProjectResponse>;

  abstract update(id: string, request: ProjectRequest): Promise<Content>;

  abstract delete(id: string): Promise<Content>;
}

@Injectable()
export class ProjectServiceImpl implements ProjectService {
  constructor(
    private mapper: ProjectMapper,
    @InjectRepository(Content) private repository: Repository<Content>,
  ) {
  }

  findContent = (): Promise<Content> => this.repository.findOne({});

  async create(request: ProjectRequest): Promise<Content> {
    let content = await this.findContent();
    if (!content.projects) content.projects = [];
    content.projects.push(this.mapper.toModel(request));
    return this.repository.save(content);
  }

  async find(): Promise<ProjectResponse[]> {
    let content = await this.findContent();
    if (!content.projects) content.projects = [];
    return content.projects.map(this.mapper.toResponse);
  }

  async findOne(id: string): Promise<ProjectResponse> {
    let content = await this.findContent();
    let project = content.projects.find(project => project.id === id);
    return this.mapper.toResponse(project);
  }

  async update(id: string, request: ProjectRequest): Promise<Content> {
    let content = await this.findContent();
    content.projects = content.projects.map(project =>
      project.id === id ? this.mapper.toModelUpdate(project, request) : project);
    return this.repository.save(content);
  }

  async delete(id: string): Promise<Content> {
    let content = await this.findContent();
    content.projects = content.projects.filter(project => project.id !== id);
    return this.repository.save(content);
  }
}
