import { CommonService } from '../../../common/common.service';
import { Skill } from './skill';
import { SkillRequest, SkillResponse } from './skill.dto';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { SkillMapper } from './skill.mapper';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

export abstract class SkillService
  extends CommonService<Skill, SkillRequest, SkillResponse> {
}

@Injectable()
export class SkillServiceImpl implements SkillService {

  constructor(
    private mapper: SkillMapper,
    @InjectRepository(Skill) private repository: Repository<Skill>,
  ) {
  }

  async create(request: SkillRequest, parentId?: string): Promise<Skill> {
    let model = this.mapper.toModel(request, parentId);
    return this.repository.save(model);
  }

  async find(parentId?: string): Promise<SkillResponse[]> {
    let models = await this.repository.find(
      { relations: { about: true }, where: { about: { id: parentId } } });
    return models.map(this.mapper.toResponse.bind(this.mapper));
  }

  async findOne(id: string, parentId?: string): Promise<SkillResponse> {
    let model = await this.repository.findOne({
      relations: { about: true },
      where: { about: { id: parentId }, id: id },
    });
    return this.mapper.toResponse(model);
  }

  async update(id: string, request: SkillRequest, parentId?: string): Promise<UpdateResult> {
    let model = this.mapper.toModel(request, parentId);
    return await this.repository.update(id, model);
  }

  async delete(id: string, parentId?: string): Promise<DeleteResult> {
    return await this.repository.delete({ about: { id: parentId }, id: id });
  }
}
