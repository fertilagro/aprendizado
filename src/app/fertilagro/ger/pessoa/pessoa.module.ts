import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { PessoaComponent } from './components/pessoa/pessoa.component';
import { PessoaRoutingModule } from './pessoa-routing.module';
import { MatCardModule } from '@angular/material/card';
import { BasicoBotaoModule } from 'src/app/shared/components/basico-botao/basico-botao.module';

@NgModule({
  declarations: [
    PessoaComponent
  ],
  imports: [
    CommonModule,
    PessoaRoutingModule,
    ButtonModule,
    ReactiveFormsModule,
    MatCardModule,
    BasicoBotaoModule
  ],
  exports: [
    PessoaComponent
  ]
})
export class PessoaModule { }
