import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const gerRoutes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(gerRoutes)],
  exports: [RouterModule]
})
export class GerRoutingModule { }
