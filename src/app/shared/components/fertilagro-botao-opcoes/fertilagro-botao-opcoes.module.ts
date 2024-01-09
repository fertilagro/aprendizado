import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { SplitButtonModule } from 'primeng/splitbutton';
import { FertilAgroBotaoOpcoesComponent } from './components/fertilagro-botao-opcoes.component';

@NgModule({
  declarations: [
    FertilAgroBotaoOpcoesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SplitButtonModule,

    ],
  exports: [
    FertilAgroBotaoOpcoesComponent
  ]
})
export class FertilAgroBotaoOpcoesModule { }
