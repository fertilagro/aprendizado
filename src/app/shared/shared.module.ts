import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { BasicoBotoesAcaoComponent } from './components/basico-botoes/basico-botao/basico-botao.component';
import { BasicoBotoesAcaoModule } from './components/basico-botoes/basico-botao.module';

@NgModule({
  declarations: [
    BasicoBotoesAcaoComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    MatMenuModule,
    RouterModule,
    MatToolbarModule,

    BasicoBotoesAcaoModule
  ],
  exports: [
    CommonModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    MatMenuModule,
    RouterModule,
    MatToolbarModule,
    
    BasicoBotoesAcaoModule
  ]
})
export class SharedModule { }
