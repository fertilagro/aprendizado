import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoaComponent } from './fertilagro/ger/pessoa/components/pessoa/pessoa.component';
import { CidadeComponent } from './fertilagro/ger/cidade/components/cidade/cidade.component';
import { PedidoComponent } from './fertilagro/agn/pedido/components/pedido/pedido.component';

const routes: Routes = [
  {
    path: "fertilagro",
    loadChildren: () => import('./fertilagro/fertilagro.module').then(m => m.FertilAgroModule)
  },
  // {
  //   path:'',
  //   redirectTo: "login",
  //   pathMatch: "full"
  // },
  {
    path:"pessoa", component: PessoaComponent
  },
  {
    path:"cidade", component: CidadeComponent
  },
  {
    path:"pedido", component: PedidoComponent
  },
  // {
  //   path:"", component: AppComponent
  // },
  // {
  //   path:"dashboard", component: AppComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
