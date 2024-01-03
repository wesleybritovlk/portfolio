import {Component, EventEmitter, Output} from '@angular/core'
import {commonIcon, StylesCommon} from '../../common/styles.common'
import {TranslateService} from '@ngx-translate/core'

@Component({
  selector: 'app-header',
  template: `
    <header>
      <h1 (click)="onClickPage('home')">Wesley<span><app-typewriter/></span></h1>
      <nav>
        <div class="nav-states">
          <app-check-button iconOn="ri-moon-clear-fill" iconOff="ri-sun-fill"
                            (isChecked)="onChangeTheme()" [check]="setCurrentTheme()"/>
          <app-check-button iconOn="fi fi-br" iconOff="fi fi-us"
                            (isChecked)="onChangeLang($event)" [check]="setCurrentLang()"/>
        </div>
        <div class="nav-menu">
          <i [ngStyle]="commonIcon(true)" class="menu-btn" (click)="activeBurger = !activeBurger"
             [ngClass]="activeBurger?'ri-close-fill --active':'ri-menu-fill'"></i>
          <ul class="menu" [ngStyle]="setBurgerStyle()">
            <li class="menu-item" (click)="onClickPage('home')">{{ 'nav_home' | translate }}</li>
            <li class="menu-item" (click)="onClickPage('about')">{{ 'nav_about' | translate }}</li>
            <li class="menu-item" (click)="onClickPage('projects')">{{ 'nav_projects' | translate }}</li>
            <li class="menu-item" (click)="onClickPage('contact')">{{ 'nav_contact' | translate }}</li>
          </ul>
        </div>
      </nav>
    </header>
  `,
  styleUrls: [`header.component.css`]
})
export class HeaderComponent {
  protected readonly commonIcon = commonIcon
  @Output() pageTarget: EventEmitter<string> = new EventEmitter()
  activeBurger: boolean = false

  constructor(private translate: TranslateService) {
    this.setCurrentTheme()
    this.setCurrentLang()
  }

  onClickPage = (page: string) => this.pageTarget.emit(page)

  setCurrentTheme(): boolean {
    const currentTheme = localStorage.getItem('theme')
    if (currentTheme === 'dark') {
      document.documentElement.classList.add('dark')
      return true
    }
    return false
  }

  setCurrentLang(): boolean {
    const currentLang = localStorage.getItem('lang')
    if (currentLang === 'pt') {
      document.documentElement.lang = 'pt'
      this.translate.use('pt')
      return true
    }
    document.documentElement.lang = 'en'
    this.translate.use('en')
    return false
  }

  onChangeLang(event: boolean) {
    document.documentElement.lang = event ? 'pt' : 'en'
    this.translate.use(event ? 'pt' : 'en')
    let lang = 'en'
    if (document.documentElement.lang === 'pt') lang = 'pt'
    localStorage.setItem('lang', lang)
  }

  onChangeTheme() {
    document.documentElement.classList.toggle('dark')
    let theme = 'light'
    if (document.documentElement.classList.contains('dark')) theme = 'dark'
    localStorage.setItem('theme', theme)
  }

  setBurgerStyle(): Record<string, string> {
    if (StylesCommon.mediaLaptop.matches) return {display: 'inline-flex'}
    return this.activeBurger ? {
      display: 'block',
      position: 'absolute',
      width: '47%',
      height: 'fit-content',
      top: '55px',
      right: '0',
      padding: '10px 0',
      background: 'var(--modal-color)',
      borderRadius: '5px',
      transition: '.5s ease-in-out',
      zIndex: '1000',
      overflow: 'hidden',
      alignItems: 'start'
    } : {display: 'none'}
  }
}
