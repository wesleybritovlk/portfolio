import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class GithubService {
  constructor(private http: HttpClient) {
  }

  getStarsByRepo(path?: string, token?: string) {
    return this.http.get<Object[]>(
      `https://api.github.com/repos/${path}/stargazers`,
      {
        headers: {
          Accept: 'application/vnd.github+json',
          Authorization: `Bearer ${token}`
        }
      })
  }
}
