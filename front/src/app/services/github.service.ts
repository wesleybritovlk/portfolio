import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";

@Injectable()
export class GithubService {
  constructor(private http: HttpClient) {
  }

  getStarsByRepo(owner?: string, repo?: string) {
    return this.http.get<Object[]>(
      `https://api.github.com/repos/${owner}/${repo}/stargazers`,
      {
        headers: {
          Accept: 'application/vnd.github+json',
          Authorization: `Bearer ${environment.GITHUB_TOKEN}`
        }
      })
  }
}
