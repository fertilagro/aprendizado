import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FertilAgroComponent } from './fertilagro/fertilagro.component';

const fertilAgroRoutes: Routes = [
  {
    path: '', component: FertilAgroComponent,
    children: [
      { path: 'agn', loadChildren: () => import('./agn/agn.module').then(m => m.AgnModule)},
      { path: 'ger', loadChildren: () => import('./ger/ger.module').then(m => m.GerModule)}
     ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(fertilAgroRoutes)],
  exports: [RouterModule]
})
export class FertilAgroRoutingRoutingModule { }
