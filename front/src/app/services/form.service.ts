import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {environment} from '../../environments/environment'
import {Form} from '../models/form'
import {BehaviorSubject, Observable} from 'rxjs'

@Injectable()
export class FormService {
  private formUrl = `${environment.API_URL}/forms`
  public loader: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  constructor(private http: HttpClient) {
  }

  postForm(form: Form): Observable<Form> {
    return this.http.post<Form>(this.formUrl, form)
  }
}
