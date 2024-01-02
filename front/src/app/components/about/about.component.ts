import {Component} from '@angular/core';
import {flexContainer, innerRowContainer} from "../../common/styles.common";

@Component({
  selector: 'app-about',
  template: `
    <section [ngStyle]="flexContainer()">
      <h2>About me</h2>
      <p [ngStyle]="innerRowContainer()">
        About desc About desc About desc About desc About desc About desc About desc About desc desc
        About desc About desc About desc About desc About desc About desc About desc About desc desc
        About desc About desc About desc About desc About desc About desc About desc About desc desc
        About desc About desc About desc About desc About desc About desc About desc About desc desc
        About desc About desc About desc About desc About desc About desc About desc About desc desc
      </p>
      <h2>Skills</h2>
      <p [ngStyle]="innerRowContainer()" class="skills-container">
        <i class="skills-icons devicon-angularjs-plain colored" [title]="'angular'"></i>
        <i class="skills-icons devicon-angularjs-plain colored" [title]="'angular'"></i>
        <i class="skills-icons devicon-angularjs-plain colored" [title]="'angular'"></i>
        <i class="skills-icons devicon-angularjs-plain colored" [title]="'angular'"></i>
        <i class="skills-icons devicon-angularjs-plain colored" [title]="'angular'"></i>
        <i class="skills-icons devicon-angularjs-plain colored" [title]="'angular'"></i>
        <i class="skills-icons devicon-angularjs-plain colored" [title]="'angular'"></i>
        <i class="skills-icons devicon-angularjs-plain colored" [title]="'angular'"></i>
      </p>
    </section>
  `,
  styles: [`
    h2 {
      margin: 15px 5px;
      font-size: var(--title-size);
      color: var(--text-color);
    }

    p {
      border: 2px solid var(--text-color);
      border-radius: 25px;
      color: var(--text-color);
      padding: 10px;
      font-size: var(--text-size-smaller);
    }

    .skills-container {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .skills-icons {
      border: 2px solid var(--text-color);
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 100%;
      margin: 3px;
      padding: 7px;
      font-size: var(--title-size);
      transition: .5s ease-out;
    }

    .skills-icons:hover {
      border-color: var(--primary-color);
      color: var(--primary-color);
      box-shadow: 0 5px 10px 1px var(--primary-color-dark);
      transform: translateY(-5px);
    }

    @media (min-width: 600px) {
      p {
        font-size: var(--text-size);
      }

      .skills-icons {
        font-size: var(--title-size-large);
        margin: 2%;
        padding: 10px;
      }
    }

    @media (min-width: 820px) {
      h2 {
        margin: 20px 5px;
      }

      p {
        font-size: var(--text-size-large);
        padding: 7px;
      }

      .skills-icons {
        font-size: var(--title-size-large);
        margin: 2%;
        padding: 14px;
      }
    }
  `]
})
export class AboutComponent {
  protected readonly flexContainer = flexContainer;
  protected readonly innerRowContainer = innerRowContainer;
}
