export interface CommonMapper<T, REQ, RES> {
  toModel(request: REQ, parentId?: string): T;

  toResponse(model: T): RES;
}
