import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ButtonModule } from 'primeng/button';
import { BasicoBotaoModule } from 'src/app/shared/components/basico-botao/basico-botao.module';
import { FertilAgroBotoesModule } from 'src/app/shared/components/fertilagro-botoes/fertilagro-botoes.module';
import { FertilAgroInputsModule } from 'src/app/shared/components/fertilagro-inputs/fertilagro-inputs.module';
import { FkFieldModule } from 'src/app/shared/components/fkfield/fkfield.module';
import { PessoaComponent } from './components/pessoa/pessoa.component';
import { PessoaRoutingModule } from './pessoa-routing.module';

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
    BasicoBotaoModule,
    FertilAgroBotoesModule,
    FertilAgroInputsModule,
    MatFormFieldModule,
    FkFieldModule
  ],
  exports: [
    PessoaComponent
  ]
})
export class PessoaModule { }
