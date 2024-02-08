import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { HomeImageRequest, HomeImageResponse } from './home-image.dto';
import { HomeImageMapper } from './home-image.mapper';
import { HomeImage } from './home-image';
import { CommonService } from '../../common/common.service';

export abstract class HomeImageService
  extends CommonService<HomeImage, HomeImageRequest, HomeImageResponse> {
}

@Injectable()
export class HomeImageServiceImpl implements HomeImageService {
  constructor(
    private mapper: HomeImageMapper,
    @InjectRepository(HomeImage) private repository: Repository<HomeImage>,
  ) {
  }

  async create(request: HomeImageRequest): Promise<HomeImage> {
    let model = this.mapper.toModel(request);
    return this.repository.save(model);
  }

  async find(): Promise<HomeImageResponse[]> {
    let models = await this.repository.find();
    return models.map(this.mapper.toResponse.bind(this.mapper));
  }

  async findOne(id: string): Promise<HomeImageResponse> {
    let model = await this.repository.findOneBy({ id: id });
    return this.mapper.toResponse(model);
  }

  async update(id: string, request: HomeImageRequest): Promise<UpdateResult> {
    let model = this.mapper.toModel(request);
    return await this.repository.update(id, model);
  }

  async delete(id: string): Promise<DeleteResult> {
    return await this.repository.delete(id);
  }
}
