import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {About, Certificate, Contact, HomeImage, Project, Social} from '../models/content'
import {Observable} from 'rxjs'
import {environment} from '../../environments/environment'

@Injectable()
export class ContentService {
  contentUrl = `${environment.apiUrl}`

  constructor(private http: HttpClient) {
  }

  getHomeImages = (): Observable<HomeImage[]> => this.http.get<HomeImage[]>(this.contentUrl + '/home_images')

  getSocials = (): Observable<Social[]> => this.http.get<Social[]>(this.contentUrl + '/socials');

  getAbouts = (): Observable<About[]> => this.http.get<About[]>(this.contentUrl + '/abouts');

  getProjects = (): Observable<Project[]> => this.http.get<Project[]>(this.contentUrl + '/projects')

  getCertificates = (): Observable<Certificate[]> => this.http.get<Certificate[]>(this.contentUrl + '/certificates')

  getContacts = (): Observable<Contact[]> => this.http.get<Contact[]>(this.contentUrl + '/contacts')
}
