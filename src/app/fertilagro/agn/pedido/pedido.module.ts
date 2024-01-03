import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FertilAgroDataModule } from 'src/app/shared/components/fertilaagro-data/fertilagro-data.module';
import { FertilAgroFkFieldModule } from 'src/app/shared/components/fertilagro-Fkfield/fertilagro-Fkfield.module';
import { FertilAgroBotoesModule } from 'src/app/shared/components/fertilagro-botoes/fertilagro-botoes.module';
import { FertilAgroInputsModule } from 'src/app/shared/components/fertilagro-inputs/fertilagro-inputs.module';
import { TabelaFilhaModule } from 'src/app/shared/components/tabela-filha/tabela-filha.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PedidoRoutingModule } from './pedido-routing.module';
import { PedidoComponent } from './components/pedido/pedido.component';

@NgModule({
  declarations: [
    PedidoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FertilAgroInputsModule,
    FertilAgroFkFieldModule,
    FertilAgroBotoesModule,
    FertilAgroDataModule,
    TabelaFilhaModule,

    PedidoRoutingModule
  ],
  exports: [
  ]
})
export class PedidoModule { }
