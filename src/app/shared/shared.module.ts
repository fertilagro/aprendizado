import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { BasicoBotaoAcaoModule } from './components/basico-botoes/basico-botao-acao.module';
import { NavbarModule } from '../components/navbar/navbar.module';
import { SidebarModule } from '../components/sidebar/sidebar.module';
import { BasicoBotaoModule } from './components/basico-botao/basico-botao.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    MatMenuModule,
    RouterModule,
    MatToolbarModule,
    BasicoBotaoAcaoModule,
    NavbarModule,
    SidebarModule,
    BasicoBotaoModule
  ],
  exports: [
    CommonModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    MatMenuModule,
    RouterModule,
    MatToolbarModule,
    BasicoBotaoAcaoModule,
    NavbarModule,
    SidebarModule,
    BasicoBotaoModule
  ]
})
export class SharedModule { }
