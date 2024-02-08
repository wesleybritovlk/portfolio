import { ContactRequest, ContactResponse } from './contact.dto';
import { Contact } from './contact';
import { CommonMapper } from '../../common/common.mapper';
import { Github } from './github/github';
import { GithubResponse } from './github/github.dto';

export class ContactMapper
  implements CommonMapper<Contact, ContactRequest, ContactResponse> {
  toModel(request: ContactRequest): Contact {
    let contact = new Contact();
    contact.mobile = request.mobile;
    contact.waEN = `https://api.whatsapp.com/send/?phone=${request.mobile}&text=${request.wa_en}`;
    contact.waPT = `https://api.whatsapp.com/send/?phone=${request.mobile}&text=${request.wa_pt}`;
    contact.resumeURL = request.resume_url;
    let github = new Github();
    github.username = request.github.username;
    github.repoName = request.github.repo_name;
    github.url = `https://github.com/${request.github.username}/${request.github.repo_name}`;
    contact.github = github;
    return contact;
  }

  toResponse(model: Contact): ContactResponse {
    let response = new ContactResponse();
    response.id = model.id;
    response.mobile = model.mobile;
    response.wa_en = model.waEN;
    response.wa_pt = model.waPT;
    response.resume_url = model.resumeURL;
    response.id = model.id;
    let githubResponse = new GithubResponse();
    if (model.github) {
      githubResponse.username = model.github.username;
      githubResponse.repo_name = model.github.repoName;
      githubResponse.url = model.github.url;
    }
    response.github = githubResponse;
    return response;
  }
}
