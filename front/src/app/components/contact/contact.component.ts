import {Component, OnDestroy, OnInit} from '@angular/core'
import {flexContainer} from '../../common/styles.common'
import {Contact} from '../../models/content'
import {ContentService} from '../../services/content.service'
import {Subscription} from 'rxjs'

@Component({
  selector: 'app-contact',
  template: `
    <section [ngStyle]="flexContainer()">
      <h2 class="contact-title">{{ 'contact_me' | translate }}</h2>
      <div class="contact-container">
        <div class="contact-number">
          <a target="_blank" [href]="setUrlByLang(contact)">
            <i class="ri-whatsapp-fill"></i>
            {{ contact.mobile | mask: '+00 (00) 00000-0000' }}
          </a>
        </div>
        <div class="contact-or">{{ 'contact_or' | translate }}</div>
        <app-form/>
      </div>
    </section>
  `,
  styleUrls: ['contact.component.css'],
  styles: [
    `@media (min-width: 820px) {
      .contact-container {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;

        .contact-number, .contact-or {
          font-size: var(--text-size);
          font-weight: 525;
          margin-top: 10px;
        }
      }
    }`,
    `@media (min-width: 920px) {
      .contact-container {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;

        .contact-number, .contact-or {
          font-size: var(--title-size-smaller);
          font-weight: 500;
          margin: 0;
        }
      }
    }`
  ]
})
export class ContactComponent implements OnInit, OnDestroy {
  protected readonly flexContainer = flexContainer
  contact: Contact = {mobile: '5500988888888', wa_en: '', wa_pt: '', resume_url: ''}
  contactSub?: Subscription

  setUrlByLang(contact: Contact) {
    let lang = document.documentElement.lang === 'en'
    return lang ? contact.wa_en : contact.wa_pt
  }

  constructor(private contentService: ContentService) {
  }

  ngOnInit(): void {
    this.contactSub = this.contentService.getContacts().subscribe({
      next: data => this.contact = data[0],
      error: error => console.error(error)
    })
  }

  ngOnDestroy(): void {
    this.contactSub?.unsubscribe()
  }
}
