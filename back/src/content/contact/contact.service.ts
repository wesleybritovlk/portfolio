import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Content } from '../content';
import { ContactRequest, ContactResponse } from './contact.dto';
import { ContactMapper } from './contact.mapper';

export abstract class ContactService {
  abstract save(request: ContactRequest): Promise<Content>;

  abstract find(): Promise<ContactResponse>;
}

@Injectable()
export class ContactServiceImpl implements ContactService {
  constructor(
    private mapper: ContactMapper,
    @InjectRepository(Content) private repository: Repository<Content>,
  ) {
  }

  findContent = (): Promise<Content> => this.repository.findOne({});

  async save(request: ContactRequest): Promise<Content> {
    let content = await this.findContent();
    content.contact = this.mapper.toModel(request);
    return this.repository.save(content);
  }

  async find(): Promise<ContactResponse> {
    let content = await this.findContent();
    return this.mapper.toResponse(content.contact);
  }
}
