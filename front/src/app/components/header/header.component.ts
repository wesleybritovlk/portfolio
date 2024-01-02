import {Component} from '@angular/core';
import {commonIcon} from "../../common/styles.common";

@Component({
  selector: 'app-header',
  template: `
    <header>
      <h1>Wesley
        <app-typewriter/>
      </h1>
      <nav>
        <div class="nav-states">
          <app-check-button iconOn="ri-moon-clear-fill"/>
          <app-check-button iconOn="fi fi-br"/>
        </div>
        <div class="nav-menu">
          <i [ngStyle]="commonIcon(true)" class="menu-btn ri-menu-fill"></i>
          <ul class="menu">
            <li class="menu-item">Home</li>
            <li class="menu-item">About</li>
            <li class="menu-item">Projects</li>
            <li class="menu-item">Contact</li>
          </ul>
        </div>
      </nav>
    </header>
  `,
  styleUrls: [`header.component.css`]
})
export class HeaderComponent {
  protected readonly commonIcon = commonIcon;
}
