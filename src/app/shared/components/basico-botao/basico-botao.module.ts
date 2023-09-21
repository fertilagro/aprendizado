import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BasicoBotaoComponent } from './components/basico-botao.component';
import { SharedModule } from '../../shared.module';

@NgModule({
  declarations: [
    BasicoBotaoComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    BasicoBotaoComponent
  ]
})
export class BasicoBotaoModule { }
