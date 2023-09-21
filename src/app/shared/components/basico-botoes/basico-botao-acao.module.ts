import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { BasicoBotaoAcaoComponent } from './components/basico-botao-acao.component';
import { BasicoBotaoModule } from '../basico-botao/basico-botao.module';

@NgModule({
  declarations: [
    BasicoBotaoAcaoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BasicoBotaoModule
  ],
  exports: [
    BasicoBotaoAcaoComponent
  ]
})
export class BasicoBotaoAcaoModule { }
