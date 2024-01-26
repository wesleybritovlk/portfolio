import {Component, EventEmitter, Output} from '@angular/core'
import {commonIcon, StylesCommon} from '../../common/styles.common'
import {TranslateService} from '@ngx-translate/core'

@Component({
  selector: 'app-header',
  template: `
    <header class="header">
      <h1 class="header-title" (click)="onClickPage('home')">Wesley<span><app-typewriter/></span></h1>
      <nav class="header-nav">
        <div class="nav-states">
          <app-check-button class="states-btn" iconOn="ri-moon-clear-fill" iconOff="ri-sun-fill"
                            (isChecked)="onChangeTheme()" [check]="setCurrentTheme()"/>
          <app-check-button class="states-btn" iconOn="fi fi-br" iconOff="fi fi-us"
                            (isChecked)="onChangeLang($event)" [check]="setCurrentLang()"/>
        </div>
        <div class="nav-menu" [class.--active]="onActiveMenu(toggleMenu)"
             (clickOutside)="toggleMenu = false">
          <div class="menu-btn" [ngStyle]="commonIcon(true)" (click)="toggleMenu = !toggleMenu">
            <i *ngIf="toggleMenu" class="ri-close-fill"></i>
            <i *ngIf="!toggleMenu" class="ri-menu-fill"></i>
          </div>
          <ul class="menu">
            <li class="menu-item" (click)="onClickPage('home')">{{ 'nav_home' | translate }}</li>
            <li class="menu-item" (click)="onClickPage('about')">{{ 'nav_about' | translate }}</li>
            <li class="menu-item" (click)="onClickPage('projects')">{{ 'nav_projects' | translate }}</li>
            <li class="menu-item" (click)="onClickPage('contact')">{{ 'nav_contact' | translate }}</li>
          </ul>
        </div>
      </nav>
    </header>
  `,
  styleUrls: [`header.component.css`],
  styles: [`@media (min-width: 360px) {
    .header {
      padding: 0 .7rem;
    }
  }`, `@media (min-width: 600px) {
    .header {
      padding: 0 1rem;
    }
  }`,
    `@media (min-width: 820px) {
      .header {
        padding: 0 1.5rem;

        .header-nav {
          flex-flow: row-reverse nowrap;

          .nav-menu .menu-btn {
            display: none;
          }

          .nav-menu .menu {
            display: inline-flex;
            position: relative;
            width: 100%;
            top: 0;
            background: transparent;

            .menu-item {
              display: flex;
              align-items: center;
              justify-content: center;
              height: 37px;
              width: fit-content;
              margin: 0 10px;
              padding: 7px 10px;
              border-radius: 25px;
              border: 2px solid transparent;

              &:hover, &:focus-within {
                border-color: var(--primary-color-light);
                color: var(--primary-color-light);
                box-shadow: 1px 2px 10px 0 var(--primary-color);
                background: var(--bkg-color);
              }
            }
          }
        }
      }
    }`]
})
export class HeaderComponent {
  protected readonly commonIcon = commonIcon
  @Output() pageTarget: EventEmitter<string> = new EventEmitter()
  toggleMenu: boolean = false

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

  onActiveMenu = (activeMenu: boolean) =>
    StylesCommon.mediaLarge.matches ? true : activeMenu
}
