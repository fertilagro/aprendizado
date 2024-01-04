import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { BasicoBotaoModule } from 'src/app/shared/components/basico-botao/basico-botao.module';
import { FertilAgroBotoesModule } from 'src/app/shared/components/fertilagro-botoes/fertilagro-botoes.module';
import { FertilAgroInputsModule } from 'src/app/shared/components/fertilagro-inputs/fertilagro-inputs.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CidadeRoutingModule } from './cidade-routing.module';
import { CidadeComponent } from './components/cidade/cidade.component';

@NgModule({
  declarations: [
    CidadeComponent
  ],
  imports: [
    CommonModule,
    CidadeRoutingModule,
    BasicoBotaoModule,
    FertilAgroBotoesModule,
    FertilAgroInputsModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    CidadeComponent
  ]
})
export class CidadeModule { }
