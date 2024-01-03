import {Component} from '@angular/core'
import {flexContainer, innerRowContainer} from '../../common/styles.common'

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
  styleUrls: [`about.component.css`]
})
export class AboutComponent {
  protected readonly flexContainer = flexContainer
  protected readonly innerRowContainer = innerRowContainer
}
