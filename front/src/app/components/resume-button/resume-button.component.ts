import {Component, Input, OnDestroy, OnInit} from '@angular/core'
import {ContentService} from '../../services/content.service'
import {Subscription} from 'rxjs'

@Component({
  selector: 'app-resume-button',
  template: `
    <app-glow-button *ngIf="!small" title="Download CV" icon="ri-file-download-line"
                     (click)="onClick(resume)"/>
    <app-glow-button *ngIf="small" smallTitle="CV" icon="ri-file-download-line"
                     (click)="onClick(resume)"/>
  `
})
export class ResumeButtonComponent implements OnInit, OnDestroy {
  @Input() small: boolean = false
  resume?: string
  resumeSub?: Subscription

  onClick = (resume?: string) => open(resume, '_blank')

  constructor(private contentService: ContentService) {
  }

  ngOnInit(): void {
    this.resumeSub = this.contentService.getContacts().subscribe({
      next: data => this.resume = data[0].resume_url,
      error: err => console.error(err)
    })
  }

  ngOnDestroy(): void {
    this.resumeSub?.unsubscribe()
  }
}
