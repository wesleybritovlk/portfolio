import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http'
import {finalize, Observable} from 'rxjs'
import {Injectable} from '@angular/core'
import {FormService} from './form.service'

@Injectable()
export class FormInterceptor implements HttpInterceptor {
  constructor(
    private service: FormService
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.service.isSending.next(true)
    return next.handle(req).pipe(
      finalize(() => this.service.isSending.next(false))
    )
  }
}
