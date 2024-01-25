import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Content} from '../models/content'
import {Observable} from 'rxjs'
import {environment} from '../../environments/environment'

@Injectable()
export class ContentService {
  contentUrl = `${environment.apiUrl}/content`

  constructor(private http: HttpClient) {
  }

  getContent(): Observable<Content> {
    return this.http.get<Content>(this.contentUrl)
  }
}
