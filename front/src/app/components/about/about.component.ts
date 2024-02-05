import {Component, OnDestroy, OnInit} from '@angular/core'
import {flexContainer, innerRowContainer} from '../../common/styles.common'
import {ContentService} from '../../services/content.service'
import {About, Skill} from '../../models/content'
import {Subscription} from 'rxjs'

@Component({
  selector: 'app-about',
  template: `
    <section [ngStyle]="flexContainer()">
      <h2 class="about-title">{{ 'about_me' | translate }}</h2>
      <p class="about-container" [ngStyle]="innerRowContainer()">
        {{ setDescByLang(about) }}
      </p>
      <h2 class="about-title">{{ 'about_skills' | translate }}</h2>
      <p class="about-container skills-container" [ngStyle]="innerRowContainer()">
        <i class="skills-icons" *ngFor="let skill of about?.skills; trackBy: trackByItems"
           [ngClass]="setIconBySkill(skill)" [title]="setAltByLang(skill)"></i>
      </p>
    </section>
  `,
  styleUrls: [`about.component.css`],
  styles: [`@media (min-width: 600px) {
    .skills-container .skills-icons {
      font-size: var(--title-size-large);
      margin: 2%;
      padding: 10px;
    }
  }`, `@media (min-width: 820px) {
    .about-title {
      margin: 20px 5px;
    }

    .about-container {
      padding: 17px;
    }

    .skills-container .skills-icons {
      font-size: var(--title-size-large);
      margin: 1.2%;
      padding: 10px;
    }
  }`, `@media (min-width: 1340px) {
    .skills-container .skills-icons {
      font-size: var(--title-size-extra-large);
    }
  }`]
})
export class AboutComponent implements OnInit, OnDestroy {
  protected readonly flexContainer = flexContainer
  protected readonly innerRowContainer = innerRowContainer
  about?: About
  aboutSub?: Subscription

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

  constructor(private contentService: ContentService) {
  }

  ngOnInit(): void {
    this.aboutSub = this.contentService.getAbouts().subscribe({
      next: data => this.about = data[0],
      error: error => console.error(error)
    })
  }

  ngOnDestroy(): void {
    this.aboutSub?.unsubscribe()
  }
}
