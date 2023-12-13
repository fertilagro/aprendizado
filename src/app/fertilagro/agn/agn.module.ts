import { NgModule } from '@angular/core';
import { AgnRoutingModule } from './agn-routing.module';
import { PedidoComponent } from './pedido/components/pedido/pedido.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FertilAgroInputsModule } from 'src/app/shared/components/fertilagro-inputs/fertilagro-inputs.module';
import { FertilAgroFkFieldModule } from 'src/app/shared/components/fertilagro-Fkfield/fertilagro-Fkfield.module';
import { FertilAgroBotoesModule } from 'src/app/shared/components/fertilagro-botoes/fertilagro-botoes.module';

@NgModule({
  declarations: [
    PedidoComponent
  ],
  imports: [
    AgnRoutingModule,
    SharedModule,
    FertilAgroInputsModule,
    FertilAgroFkFieldModule,
    FertilAgroBotoesModule
  ],
  exports: [

  ]
})
export class AgnModule {}
