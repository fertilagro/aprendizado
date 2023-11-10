import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { SharedModule } from '../../shared.module';
import { BasicoBotaoComponent } from './components/basico-botao.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    BasicoBotaoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatRippleModule,
    MatIconModule
  ],
  exports: [
    BasicoBotaoComponent
  ]
})
export class BasicoBotaoModule { }
