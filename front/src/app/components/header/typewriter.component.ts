import {Component, OnInit} from '@angular/core'

@Component({
  selector: 'app-typewriter',
  template: `<label class="typewriter">{{ displayTexts }}</label>`,
  styles: [`
    .typewriter {
      position: relative;
      color: var(--primary-color);
      overflow: hidden;
      border-right: .15rem solid var(--primary-color);
      white-space: nowrap;
      margin: 0 auto;
      letter-spacing: 1px;
      text-align: center;
      animation: blink-cursor .75s infinite step-end;
      will-change: animation;
    }

    @keyframes blink-cursor {
      from, to {
        border-color: transparent
      }
      50% {
        border-color: var(--primary-color);
      }
    }
  `]
})
export class TypewriterComponent implements OnInit {
  displayTexts: string = ''

  write = (text: string, timeout: number) => new Promise((resolve) => {
    text.split('').map((letter, i) => setTimeout(() =>
      this.displayTexts += letter, timeout * i))
    setTimeout(resolve, timeout * text.length)
  })

  delete = (text: string, timeout: number) => new Promise((resolve) => {
    this.displayTexts = text
    text.split('').map((letter, i) => setTimeout(() =>
      this.displayTexts = this.displayTexts.substring(0, text.length - i - 1), timeout * i))
    setTimeout(resolve, timeout * text.length)
  })

  async typewriter(text: string, timeout: number) {
    await this.write(text, timeout)
    await this.delete(text, timeout)
  }

  typewriterRepeater = async (texts: string[]) => {
    for (const text of texts) await this.typewriter(text, 750)
    await this.typewriterRepeater(texts)
  }

  async ngOnInit() {
    await this.typewriterRepeater(['Brito', 'VLK'])
  }
}
