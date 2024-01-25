import { ContactRequest, ContactResponse } from './contact.dto';
import { Contact } from './contact';
import { GitHub } from './github/github';
import { GitHubResponse } from './github/github.dto';

export class ContactMapper {
  toModel = (request: ContactRequest): Contact =>
    new Contact(
      request.mobile,
      `https://api.whatsapp.com/send/?phone=${
        request.mobile
      }&text=Hello Wesley, I saw your portfolio and would like more information`,
      `https://api.whatsapp.com/send/?phone=${
        request.mobile
      }&text=Olá Wesley, vi seu portfólio e gostaria de mais informações`,
      request.resume_url,
      new GitHub(
        request.github.username,
        request.github.repo_name,
        `https://github.com/${
          request.github.username
        }/${
          request.github.repo_name
        }`,
      ),
    );

  toResponse = (model: Contact): ContactResponse =>
    model ? new ContactResponse(
      model.mobile,
      model.waEN,
      model.waPT,
      model.resumeURL,
      new GitHubResponse(
        model.github.username,
        model.github.repoName,
        model.github.url,
      ),
    ) : undefined;
}
