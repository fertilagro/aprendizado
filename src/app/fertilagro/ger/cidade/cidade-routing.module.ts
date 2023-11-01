import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const cidadeRoutes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(cidadeRoutes)],
  exports: [RouterModule]
})
export class CidadeRoutingModule { }
