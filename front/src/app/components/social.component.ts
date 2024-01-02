import {Component} from '@angular/core';
import {commonIcon} from "../common/styles.common";

@Component({
  selector: 'app-social',
  template: `
    <div class="social-container">
      <div class="social-links">
        <i [ngStyle]="commonIcon()" class="ri-discord-line"></i>
        <i [ngStyle]="commonIcon()" class="ri-instagram-line"></i>
        <i [ngStyle]="commonIcon()" class="ri-github-line"></i>
        <i [ngStyle]="commonIcon()" class="ri-linkedin-line"></i>
      </div>
      <div class="social-email">
        <label>
          wesleymuniz20@gmail.com
        </label>
      </div>
    </div>
  `,
  styles: [`
    .social-links, .social-email {
      position: relative;
      z-index: 0;
      top: -7.5rem;
      width: 100%;
      margin-bottom: 20px;
      display: flex;
      justify-content: center;
      color: var(--text-color);
    }

    .social-links i, .social-email label {
      cursor: pointer;
      transition: .3s ease-in-out;
    }

    .social-links i:hover, .social-email label:hover,
    .social-links i:focus-within, .social-email label:focus-within,
    .social-links i:active, .social-email label:active {
      border-color: var(--primary-color);
      color: var(--primary-color);
    }

    @media (min-width: 820px) {
      .social-container {
        position: fixed;
        width: 100%;
        display: flex;
        justify-content: space-between;
      }

      .social-links, .social-email {
        z-index: -1;
        margin-bottom: 0;
        transform: rotate(90deg);
        display: flex;
        align-items: center;
        width: 25rem;
        top: -7.2rem;
      }

      .social-links i {
        padding: 0 24px;
        transform: rotate(-90deg);
      }

      .social-links {
        left: -8.5rem;
      }

      .social-email {
        right: -8.5rem;
        font-size: var(--text-size);
      }

      .social-links:after, .social-email:after {
        content: "";
        display: flex;
        flex-flow: row nowrap;
        margin-left: 15px;
        border-bottom: var(--text-color) 2px solid;
        width: 100%;
      }

    }
  `]
})
export class SocialComponent {
  protected readonly commonIcon = commonIcon;
}
