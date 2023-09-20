import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared.module';
import { BasicoBotoesAcaoComponent } from './basico-botoes-acao/basico-botoes-acao.component';

@NgModule({
  declarations: [
    BasicoBotoesAcaoComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class BasicoBotoesAcaoModule { }
