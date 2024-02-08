import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { ContactRequest, ContactResponse } from './contact.dto';
import { ContactMapper } from './contact.mapper';
import { Contact } from './contact';
import { CommonService } from '../../common/common.service';

export abstract class ContactService
  extends CommonService<Contact, ContactRequest, ContactResponse> {
}

@Injectable()
export class ContactServiceImpl implements ContactService {
  constructor(
    private mapper: ContactMapper,
    @InjectRepository(Contact) private repository: Repository<Contact>,
  ) {
  }

  async create(request: ContactRequest): Promise<Contact> {
    let model = this.mapper.toModel(request);
    return await this.repository.save(model);
  }

  async find(): Promise<ContactResponse[]> {
    let models = await this.repository.find();
    return models.map(this.mapper.toResponse);
  }

  async findOne(id: string): Promise<ContactResponse> {
    let model = await this.repository.findOneBy({ id: id });
    return this.mapper.toResponse(model);
  }

  async update(id: string, request: ContactRequest): Promise<UpdateResult> {
    let model = this.mapper.toModel(request);
    return await this.repository.update(id, model);
  }

  async delete(id: string): Promise<DeleteResult> {
    return await this.repository.delete(id);
  }
}
