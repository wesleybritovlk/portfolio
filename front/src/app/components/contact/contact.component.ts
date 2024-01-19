import {Component} from '@angular/core'
import {flexContainer} from '../../common/styles.common'
import {Contact} from '../../models/content'
import {ContentService} from '../../services/content.service'

@Component({
  selector: 'app-contact',
  template: `
    <section [ngStyle]="flexContainer()">
      <h2>{{ 'contact_me' | translate }}</h2>
      <div class="contact-container">
        <div class="contact-number">
          <a target="_blank" [href]="setUrlByLang(contact)">
            <i class="ri-whatsapp-fill"></i>
            {{ contact?.mobile ?? '5500988888888' | mask: '+00 (00) 00000-0000' }}
          </a>
        </div>
        <div class="contact-or">{{ 'contact_or' | translate }}</div>
        <app-form/>
      </div>
    </section>
  `,
  styleUrls: ['contact.component.css']
})
export class ContactComponent {
  protected readonly flexContainer = flexContainer
  contact?: Contact

  constructor(private contentService: ContentService) {
    this.contentService.getContent().subscribe({
      next: (content) => this.contact = content.contact,
      error: error => console.error(error)
    })
  }

  setUrlByLang(contact: Contact | undefined) {
    let lang = document.documentElement.lang === 'en'
    return lang ? contact?.wa_en ?? '' : contact?.wa_pt ?? ''
  }
}
