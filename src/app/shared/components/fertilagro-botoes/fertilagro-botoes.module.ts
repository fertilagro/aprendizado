import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { FertilAgroBotoesComponent } from './components/fertilagro-botoes.component';
import { BasicoBotaoModule } from '../basico-botao/basico-botao.module';

@NgModule({
  declarations: [
    FertilAgroBotoesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BasicoBotaoModule
    ],
  exports: [
    FertilAgroBotoesComponent
  ]
})
export class FertilAgroBotoesModule { }
