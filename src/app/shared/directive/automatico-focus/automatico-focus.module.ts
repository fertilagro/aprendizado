import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutomaticoFocusDirective } from './automatico-focus.directive';

@NgModule({
  declarations: [
    AutomaticoFocusDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AutomaticoFocusDirective
  ]
})
export class AutomaticoFocusModule { }
