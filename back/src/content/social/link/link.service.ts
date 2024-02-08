import { CommonService } from '../../../common/common.service';
import { Link } from './link';
import { LinkRequest, LinkResponse } from './link.dto';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { LinkMapper } from './link.mapper';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

export abstract class LinkService
  extends CommonService<Link, LinkRequest, LinkResponse> {
}

@Injectable()
export class LinkServiceImpl implements LinkService {
  constructor(
    private mapper: LinkMapper,
    @InjectRepository(Link) private repository: Repository<Link>,
  ) {
  }

  async create(request: LinkRequest, parentId?: string): Promise<Link> {
    let model = this.mapper.toModel(request, parentId);
    return await this.repository.save(model);
  }

  async find(parentId?: string): Promise<LinkResponse[]> {
    let models = await this.repository.find(
      { relations: { social: true }, where: { social: { id: parentId } } });
    return models.map(model => this.mapper.toResponse(model));
  }

  async findOne(id: string, parentId?: string): Promise<LinkResponse> {
    let model = await this.repository.findOne({
      relations: { social: true },
      where: { social: { id: parentId }, id: id },
    });
    return this.mapper.toResponse(model);
  }

  async update(id: string, request: LinkRequest, parentId?: string): Promise<UpdateResult> {
    let model = this.mapper.toModel(request, parentId);
    return await this.repository.update(id, model);
  }

  async delete(id: string, parentId?: string): Promise<DeleteResult> {
    return await this.repository.delete({ social: { id: parentId }, id: id });
  }
}
