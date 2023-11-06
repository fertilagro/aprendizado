import { Directive, Input, OnChanges } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[disableControl]'
})
export class DisableControlDirective implements OnChanges {

  @Input('disableControl') disableControl;

  constructor( private ngControl: NgControl) { }

  ngOnChanges(changes) {
    if (changes?.disableControl) {
      const action = this.disableControl ? 'disable' : 'enable';
      this.ngControl.control[action]();
    }
  }
}
