import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { SocialRequest, SocialResponse } from './social.dto';
import { SocialMapper } from './social.mapper';
import { Social } from './social';
import { CommonService } from '../../common/common.service';

export abstract class SocialService
  extends CommonService<Social, SocialRequest, SocialResponse> {
}

@Injectable()
export class SocialServiceImpl implements SocialService {
  constructor(
    private mapper: SocialMapper,
    @InjectRepository(Social) private repository: Repository<Social>,
  ) {
  }

  async create(request: SocialRequest): Promise<Social> {
    let model = this.mapper.toModel(request);
    return await this.repository.save(model);
  }

  async find(): Promise<SocialResponse[]> {
    let models = await this.repository.find(
      { relations: { links: true } });
    return models.map(this.mapper.toResponse);
  }

  async findOne(id: string): Promise<SocialResponse> {
    let model = await this.repository.findOne(
      { relations: { links: true }, where: { id: id } });
    return this.mapper.toResponse(model);
  }

  async update(id: string, request: SocialRequest): Promise<UpdateResult> {
    let model = this.mapper.toModel(request);
    return await this.repository.update(id, model);
  }

  async delete(id: string): Promise<DeleteResult> {
    return await this.repository.delete(id);
  }
}
