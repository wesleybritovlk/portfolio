import { Response } from 'express';

export interface CommonController<REQ, RES> {
  post(res: Response, request: REQ, parentId?: string): Promise<Response>;

  get(res: Response, parentId?: string): Promise<RES[]>;

  getById(res: Response, id: string, parentId?: string): Promise<RES>;

  put(res: Response, id: string, request: REQ, parentId?: string): Promise<Response>;

  delete(res: Response, id: string, parentId?: string): Promise<Response>;
}