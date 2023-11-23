import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const agnRoutes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(agnRoutes)],
  exports: [RouterModule]
})

export class AgnRoutingModule { }
