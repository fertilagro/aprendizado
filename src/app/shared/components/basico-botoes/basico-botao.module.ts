import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { BasicoBotoesAcaoComponent } from './basico-botao/basico-botao.component';
import { BasicoBotaoAcaoComponent } from './basico-botao-acao/basico-botao-acao.component';

@NgModule({
  declarations: [
    BasicoBotoesAcaoComponent,
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
export class BasicoBotoesAcaoModule { }
