import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { amostraComponent } from './components/amostra.component';

const amostraRoutes: Routes = [
    {
        path: 'amostra', component: amostraComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(amostraRoutes)],
  exports: [RouterModule]
})
export class AmostraRoutingModule { }
