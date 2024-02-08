import { CommonService } from '../../common/common.service';
import { About } from './about';
import { AboutRequest, AboutResponse } from './about.dto';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { AboutMapper } from './about.mapper';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

export abstract class AboutService
  extends CommonService<About, AboutRequest, AboutResponse> {
}

@Injectable()
export class AboutServiceImpl implements AboutService {
  constructor(
    private mapper: AboutMapper,
    @InjectRepository(About) private repository: Repository<About>,
  ) {
  }

  async create(request: AboutRequest): Promise<About> {
    let model = this.mapper.toModel(request);
    return this.repository.save(model);
  }

  async find(): Promise<AboutResponse[]> {
    let models = await this.repository.find(
      { relations: { skills: true } });
    return models.map(this.mapper.toResponse.bind(this.mapper));
  }

  async findOne(id: string): Promise<AboutResponse> {
    let model = await this.repository.findOne(
      { relations: { skills: true }, where: { id: id } });
    return this.mapper.toResponse(model);
  }

  async update(id: string, request: AboutRequest): Promise<UpdateResult> {
    let model = this.mapper.toModel(request);
    return await this.repository.update(id, model);
  }

  async delete(id: string): Promise<DeleteResult> {
    return await this.repository.delete(id);
  }
}
