import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PedidoComponent } from './fertilagro/agn/pedido/components/pedido/pedido.component';
import { CidadeComponent } from './fertilagro/ger/cidade/components/cidade/cidade.component';
import { PessoaComponent } from './fertilagro/ger/pessoa/components/pessoa/pessoa.component';
import { amostraComponent } from './fertilagro/agn/amostra/components/amostra.component';
import { FertilAgroComponent } from './fertilagro/fertilagro/fertilagro.component';

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
    path:"dashboard", component: FertilAgroComponent
  },
  {
    path:"pessoa", component: PessoaComponent
  },
  {
    path:"cidade", component: CidadeComponent
  },
  {
    path:"pedido", component: PedidoComponent
  },
  {
    path:"amostra", component: amostraComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
