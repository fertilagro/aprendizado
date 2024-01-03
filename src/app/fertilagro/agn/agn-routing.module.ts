import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const agnRoutes: Routes = [
  {
    path: 'pedido',
    loadChildren: () => import('./pedido/pedido.module').then(m => m.PedidoModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(agnRoutes)],
  exports: [RouterModule]
})

export class AgnRoutingModule { }
