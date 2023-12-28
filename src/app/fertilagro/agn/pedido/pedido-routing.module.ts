import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const pedidoRoutes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(pedidoRoutes)],
  exports: [RouterModule]
})

export class PedidoRoutingModule { }
