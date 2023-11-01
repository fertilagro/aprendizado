import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const pessoaRoutes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(pessoaRoutes)],
  exports: [RouterModule]
})
export class PessoaRoutingModule { }
