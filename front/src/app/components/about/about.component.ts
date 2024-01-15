import {Component} from '@angular/core'
import {flexContainer, innerRowContainer} from '../../common/styles.common'
import {ContentService} from '../../services/content.service'
import {About, Skill} from '../../models/content'

@Component({
  selector: 'app-about',
  template: `
    <section [ngStyle]="flexContainer()">
      <h2>{{ 'about_me' | translate }}</h2>
      <p [ngStyle]="innerRowContainer()" class="about-desc">
        {{ setDescByLang(about) }}
      </p>
      <h2>{{ 'about_skills' | translate }}</h2>
      <p [ngStyle]="innerRowContainer()" class="skills-container">
        <i *ngFor="let skill of about?.skills; trackBy: trackByItems"
           class="skills-icons" [ngClass]="setIconBySkill(skill)" [title]="setAltByLang(skill)"></i>
      </p>
    </section>
  `,
  styleUrls: [`about.component.css`]
})
export class AboutComponent {
  protected readonly flexContainer = flexContainer
  protected readonly innerRowContainer = innerRowContainer
  about?: About

  constructor(private contentService: ContentService) {
    this.contentService.getContent().subscribe({
      next: data => this.about = data.about,
      error: error => console.error(error)
    })
  }

  trackByItems = (index: number, skill: Skill): string => skill.id

  setIconBySkill = (skill: Skill) => `devicon-${skill.tech_name}-plain colored`

  setAltByLang(skill: Skill) {
    let lang = document.documentElement.lang === 'en'
    return lang ? skill.alt_en : skill.alt_pt
  }

  setDescByLang(about: About | undefined) {
    let lang = document.documentElement.lang === 'en'
    return lang ? about?.desc_en : about?.desc_pt
  }
}
