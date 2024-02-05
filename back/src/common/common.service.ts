import { DeleteResult, UpdateResult } from 'typeorm';

export abstract class CommonService<T, REQ, RES> {
  abstract create(request: REQ, parentId?: string): Promise<T>

  abstract find(parentId?: string): Promise<RES[]>

  abstract findOne(id: string, parentId?: string): Promise<RES>

  abstract update(id: string, request: REQ, parentId?: string): Promise<UpdateResult>

  abstract delete(id: string, parentId?: string): Promise<DeleteResult>
}
