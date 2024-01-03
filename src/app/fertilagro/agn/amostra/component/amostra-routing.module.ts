import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmostraComponent } from './amostra/amostra.component';

const amostraRoutes: Routes = [
  {
    path: '', component: AmostraComponent, data: {title: 'Amostras'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(amostraRoutes)],
  exports: [RouterModule]
})
export class AmostraRoutingModule { }
