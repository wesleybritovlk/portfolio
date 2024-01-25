import {Directive, ElementRef, EventEmitter, HostListener, Output} from '@angular/core'

@Directive({
  selector: '[clickOutside]'
})
export class ClickOutsideDirective {
  @Output() clickOutside: EventEmitter<void> = new EventEmitter()

  constructor(private elementRef: ElementRef) {
  }

  @HostListener('document:click', ['$event.target'])
  handleClick(target: Element) {
    const directive = this.elementRef.nativeElement.getAttributeNames()[0]
    let click = target.getAttributeNames()[0]
    if (directive !== click) this.clickOutside.emit()
  }
}
