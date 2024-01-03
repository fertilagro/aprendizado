import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BasicoBotaoModule } from 'src/app/shared/components/basico-botao/basico-botao.module';
import { FertilAgroBotoesModule } from 'src/app/shared/components/fertilagro-botoes/fertilagro-botoes.module';
import { FertilAgroInputsModule } from 'src/app/shared/components/fertilagro-inputs/fertilagro-inputs.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AmostraRoutingModule } from './amostra-routing.module';
import { AmostraComponent } from './amostra/amostra.component';

@NgModule({
  declarations: [
    AmostraComponent
  ],
  imports: [
    CommonModule,
    BasicoBotaoModule,
    FertilAgroBotoesModule,
    FertilAgroInputsModule,
    SharedModule,

    AmostraRoutingModule
  ],
  exports: [
    AmostraComponent
  ]
})
export class AmostraModule { }
