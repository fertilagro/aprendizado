import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PessoaComponent } from './pessoa/pessoa.component';
import { ComponentsModule } from '../components.module';

@NgModule({
  declarations: [
    PessoaComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    PessoaComponent
  ]
})
export class PessoaModule { }
