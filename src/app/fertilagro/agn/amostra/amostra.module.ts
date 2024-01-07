import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AmostraRoutingModule } from './amostra-routing.module';
import { amostraComponent } from './components/amostra.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { FertilAgroBotoesModule } from 'src/app/shared/components/fertilagro-botoes/fertilagro-botoes.module';
import { FertilAgroInputsModule } from 'src/app/shared/components/fertilagro-inputs/fertilagro-inputs.module';
import { FertilAgroFkFieldModule } from 'src/app/shared/components/fertilagro-Fkfield/fertilagro-Fkfield.module';
import { FertilAgroDataModule } from 'src/app/shared/components/fertilaagro-data/fertilagro-data.module';

@NgModule({
  declarations: [
    amostraComponent
  ],
  imports: [
    CommonModule,
    // material angular
    MatCardModule,

    // Fertilagro
    SharedModule,
    FertilAgroBotoesModule,
    FertilAgroInputsModule,
    FertilAgroFkFieldModule,
    FertilAgroDataModule,

    AmostraRoutingModule
  ],
  exports: [
    amostraComponent
  ]
})
export class AmostraModule { }
