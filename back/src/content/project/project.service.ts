import { CommonService } from '../../common/common.service';
import { Project } from './project';
import { ProjectRequest, ProjectResponse } from './project.dto';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { ProjectMapper } from './project.mapper';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

export abstract class ProjectService
  extends CommonService<Project, ProjectRequest, ProjectResponse> {
}

@Injectable()
export class ProjectServiceImpl implements ProjectService {
  constructor(
    private mapper: ProjectMapper,
    @InjectRepository(Project) private repository: Repository<Project>,
  ) {
  }

  async create(request: ProjectRequest): Promise<Project> {
    let model = this.mapper.toModel(request);
    return this.repository.save(model);
  }

  async find(): Promise<ProjectResponse[]> {
    let models = await this.repository.find();
    return models.map(this.mapper.toResponse.bind(this.mapper));
  }

  async findOne(id: string): Promise<ProjectResponse> {
    let model = await this.repository.findOneBy({ id: id });
    return this.mapper.toResponse(model);
  }

  async update(id: string, request: ProjectRequest): Promise<UpdateResult> {
    let model = this.mapper.toModel(request);
    return await this.repository.update(id, model);
  }

  async delete(id: string): Promise<DeleteResult> {
    return await this.repository.delete(id);
  }
}
