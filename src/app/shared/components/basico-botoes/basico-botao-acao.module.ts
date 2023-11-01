import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { BasicoBotaoAcaoComponent } from './components/basico-botao-acao.component';

@NgModule({
  declarations: [
    BasicoBotaoAcaoComponent
  ],
  imports: [
    CommonModule,
    SharedModule
    ],
  exports: [
    BasicoBotaoAcaoComponent
  ]
})
export class BasicoBotaoAcaoModule { }
