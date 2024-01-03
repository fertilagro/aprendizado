import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidoComponent } from './components/pedido/pedido.component';

const pedidoRoutes: Routes = [
  {
    path: '', component: PedidoComponent, data: { title: 'Pedido' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(pedidoRoutes)],
  exports: [RouterModule]
})

export class PedidoRoutingModule { }
