import { Injectable } from "@nestjs/common";
import { Content } from "./content";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

export abstract class ContentService {
  abstract findAll(): Promise<Content[]>;

  abstract create(content: Content): Promise<Content>;
}

@Injectable()
export class ContentServiceImpl implements ContentService {
  constructor(
    @InjectRepository(Content) private repository: Repository<Content>) {
  }

  async create(content: Content): Promise<Content> {
    return this.repository.save(content);
  }

  findAll(): Promise<Content[]> {
    return this.repository.find();
  }
}
