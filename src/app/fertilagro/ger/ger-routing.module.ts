import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const gerRoutes: Routes = [
  {
    path: 'pessoa',
    loadChildren: () => import('./pessoa/pessoa.module').then(m => m.PessoaModule)
  },
  {
    path: 'cidade',
    loadChildren: () => import('./cidade/cidade.module').then(m => m.CidadeModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(gerRoutes)],
  exports: [RouterModule]
})
export class GerRoutingModule { }
