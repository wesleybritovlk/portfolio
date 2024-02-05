import { ProjectRequest, ProjectResponse } from './project.dto';
import { Project } from './project';
import { CommonMapper } from '../../common/common.mapper';

export class ProjectMapper
  implements CommonMapper<Project, ProjectRequest, ProjectResponse> {
  toModel(request: ProjectRequest): Project {
    let project = new Project();
    project.title = request.title;
    project.repoURL = request.repo_url;
    project.webURL = request.web_url;
    project.apiURL = request.api_url;
    project.imageURL = request.image_url;
    project.descEN = request.desc_en;
    project.descPT = request.desc_pt;
    return project;
  }

  toResponse(model: Project): ProjectResponse {
    let response = new ProjectResponse();
    response.id = model.id;
    response.title = model.title;
    response.repo_url = model.repoURL;
    response.web_url = model.webURL;
    response.api_url = model.apiURL;
    response.image_url = model.imageURL;
    response.desc_en = model.descEN;
    response.desc_pt = model.descPT;
    return response;
  }
}
