import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CnpjCpfMask } from './cnpjcpf.directive';

@NgModule({
  declarations: [
    CnpjCpfMask
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CnpjCpfMask
  ]
})
export class CnpjcpfModule { }
