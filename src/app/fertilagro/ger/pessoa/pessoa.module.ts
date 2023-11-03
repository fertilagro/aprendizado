import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PessoaComponent } from './components/pessoa/pessoa.component';
import { PessoaRoutingModule } from './pessoa-routing.module';
import { ButtonModule } from 'primeng/button';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    PessoaComponent
  ],
  imports: [
    CommonModule,
    PessoaRoutingModule,
    ButtonModule,
    ReactiveFormsModule
  ],
  exports: [
    PessoaComponent
  ]
})
export class PessoaModule { }
