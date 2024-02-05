import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CertificateRequest, CertificateResponse } from './certificate.dto';
import { CertificateMapper } from './certificate.mapper';
import { Certificate } from './certificate';
import { CommonService } from '../../common/common.service';

export abstract class CertificateService
  extends CommonService<Certificate, CertificateRequest, CertificateResponse> {
}

@Injectable()
export class CertificateServiceImpl implements CertificateService {
  constructor(
    private mapper: CertificateMapper,
    @InjectRepository(Certificate) private repository: Repository<Certificate>,
  ) {
  }

  async create(request: CertificateRequest): Promise<Certificate> {
    let model = this.mapper.toModel(request);
    return this.repository.save(model);
  }

  async find(): Promise<CertificateResponse[]> {
    let models = await this.repository.find();
    return models.map(this.mapper.toResponse.bind(this.mapper));
  }

  async findOne(id: string): Promise<CertificateResponse> {
    let model = await this.repository.findOneBy({ id: id });
    return this.mapper.toResponse(model);
  }

  async update(id: string, request: CertificateRequest): Promise<UpdateResult> {
    let model = this.mapper.toModel(request);
    return this.repository.update(id, model);
  }

  async delete(id: string): Promise<DeleteResult> {
    return await this.repository.delete(id);
  }
}