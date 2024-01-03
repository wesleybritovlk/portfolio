import {Component} from '@angular/core'

@Component({
  selector: 'app-card',
  template: `
    <article class="card-container">
      <div class="card-modal">
        <div class="modal-title">
          <h4>Project Title</h4>
          <div class="title-links">
            <i class="project-links ri-github-fill"></i>
            <i class="project-links ri-global-line"></i>
            <i class="project-links ri-braces-fill"></i>
          </div>
        </div>
        <p class="modal-desc">
          project desc project desc project desc project desc
          project desc project desc project desc project desc
          project desc project desc project desc project desc
        </p>
      </div>
    </article>
  `,
  styles: [`
    .card-container {
      position: absolute;
      border-radius: 25px;
      width: 200px;
      overflow: hidden;
      height: 165px;
      transition: 1s ease-in-out;
      background: var(--primary-color);
    }

    .card-modal {
      position: relative;
      border-radius: 25px;
      height: 100%;
      transform: translateY(85%);
      transition: 1s ease-in-out;
      width: 100%;
      display: flex;
      flex-flow: column wrap;
      align-items: center;
      background: var(--btn-text-color);
    }

    .modal-title {
      display: flex;
      flex-flow: row nowrap;
      width: 100%;
      justify-content: space-between;
      padding: 20px;
      color: var(--text-color);
      font-size: var(--title-size-smaller);
    }

    .project-links {
      transition: .3s ease-in-out;
    }

    .project-links:hover, .project-links:focus-within, .project-links:active {
      color: var(--primary-color);
    }

    .modal-desc {
      width: 90%;
      color: var(--text-color);
      font-size: var(--text-size-smaller);
    }

    .card-container:hover .card-modal,
    .card-container:focus-within .card-modal,
    .card-container:active .card-modal {
      border: 2px solid var(--primary-color);
      transform: translateY(0);
    }

    @media (min-width: 360px) {
      .card-container {
        width: 250px;
        height: 190px;
      }
    }

    @media (min-width: 600px) {
      .card-container {
        width: 300px;
        height: 215px;
      }
    }

    @media (min-width: 820px) {
      .card-container {
        width: 350px;
        height: 225px;
      }
    }
  `]
})
export class CardComponent {

}
