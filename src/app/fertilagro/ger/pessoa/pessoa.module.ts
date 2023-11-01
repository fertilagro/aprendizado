import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PessoaComponent } from './components/pessoa/pessoa.component';
import { PessoaRoutingModule } from './pessoa-routing.module';

@NgModule({
  declarations: [
    PessoaComponent
  ],
  imports: [
    CommonModule,
    PessoaRoutingModule
  ],
  exports: [
    PessoaComponent
  ]
})
export class PessoaModule { }
