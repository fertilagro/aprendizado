import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { TabelaFilhaComponent } from './components/tabela-filha.component';

@NgModule({
  declarations: [
    TabelaFilhaComponent
  ],
  imports: [
    CommonModule,
    SharedModule
    ],
  exports: [
    TabelaFilhaComponent
  ]
})
export class TabelaFilhaModule { }
