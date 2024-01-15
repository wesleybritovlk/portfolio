import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Content } from '../content';
import { CertificateRequest, CertificateResponse } from './certificate.dto';
import { CertificateMapper } from './certificate.mapper';

export abstract class CertificateService {

  abstract create(request: CertificateRequest): Promise<Content>;

  abstract find(): Promise<CertificateResponse[]>;

  abstract findOne(id: string): Promise<CertificateResponse>;

  abstract update(id: string, request: CertificateRequest): Promise<Content>;

  abstract delete(id: string): Promise<Content>;
}

@Injectable()
export class CertificateServiceImpl implements CertificateService {
  constructor(
    private mapper: CertificateMapper,
    @InjectRepository(Content) private repository: Repository<Content>,
  ) {
  }

  findContent = (): Promise<Content> => this.repository.findOne({});

  async create(request: CertificateRequest): Promise<Content> {
    let content = await this.findContent();
    if (!content.certificates) content.certificates = [];
    content.certificates.push(this.mapper.toModel(request));
    return this.repository.save(content);
  }

  async find(): Promise<CertificateResponse[]> {
    let content = await this.findContent();
    if (!content.certificates) content.certificates = [];
    return content.certificates.map(this.mapper.toResponse);
  }

  async findOne(id: string): Promise<CertificateResponse> {
    let content = await this.findContent();
    let certificate = content.certificates.find(cert => cert.id === id);
    return this.mapper.toResponse(certificate);
  }

  async update(id: string, request: CertificateRequest): Promise<Content> {
    let content = await this.findContent();
    content.certificates = content.certificates.map(cert =>
      cert.id === id ? this.mapper.toModelUpdate(cert, request) : cert);
    return this.repository.save(content);
  }

  async delete(id: string): Promise<Content> {
    let content = await this.findContent();
    content.certificates = content.certificates.filter(cert => cert.id !== id);
    return this.repository.save(content);
  }
}