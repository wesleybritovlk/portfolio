import { ProjectRequest, ProjectResponse } from './project.dto';
import { Project } from './project';

export class ProjectMapper {
  toModel = (request: ProjectRequest): Project =>
    new Project(
      undefined,
      request.title,
      request.repo_url,
      request.web_url,
      request.api_url,
      request.image_url,
      request.desc_en,
      request.desc_pt,
    );

  toModelUpdate = (model: Project, request: ProjectRequest): Project =>
    new Project(
      model.id,
      request.title,
      request.repo_url,
      request.web_url,
      request.api_url,
      request.image_url,
      request.desc_en,
      request.desc_pt,
      model.createdAt,
    );

  toResponse = (model: Project): ProjectResponse =>
    model ? new ProjectResponse(
      model.id,
      model.title,
      model.repoURL,
      model.webURL,
      model.apiURL,
      model.imageURL,
      model.descEN,
      model.descPT,
    ) : undefined;
}
