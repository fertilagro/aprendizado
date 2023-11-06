import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appAutomaticoFocus]'
})
export class AutomaticoFocusDirective {

  @Input() set appAutomaticoFocus(condition: boolean) {
    if (condition) {
      setTimeout(() => {
        this.el.nativeElement.focus();
      }, 1);
    }
  }

  constructor(private el: ElementRef) { }

}
