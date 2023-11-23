import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { BasicoBotaoModule } from 'src/app/shared/components/basico-botao/basico-botao.module';
import { FertilAgroFkFieldModule } from 'src/app/shared/components/fertilagro-Fkfield/fertilagro-Fkfield.module';
import { FertilAgroBotoesModule } from 'src/app/shared/components/fertilagro-botoes/fertilagro-botoes.module';
import { FertilAgroInputsModule } from 'src/app/shared/components/fertilagro-inputs/fertilagro-inputs.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CidadeModule } from '../cidade/cidade.module';
import { PessoaComponent } from './components/pessoa/pessoa.component';
import { PessoaRoutingModule } from './pessoa-routing.module';


@NgModule({
  declarations: [
    PessoaComponent
  ],
  imports: [
    CommonModule,
    PessoaRoutingModule,
    BasicoBotaoModule,
    FertilAgroBotoesModule,
    FertilAgroInputsModule,
    SharedModule,
    FormsModule,
    FertilAgroFkFieldModule,
    CidadeModule



   // PessoaModule,
  //  SharedModule,

  ],
  exports: [
    PessoaComponent
  ],
  providers: [
    MessageService
  ]
})
export class PessoaModule { }
