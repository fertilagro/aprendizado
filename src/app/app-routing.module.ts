import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { PessoaComponent } from './fertilagro/ger/pessoa/components/pessoa/pessoa.component';

const routes: Routes = [
  {
    path:"",
    pathMatch: "full",
    redirectTo: "dashboard"
  },
  {
    path:"login", component: PessoaComponent
  },
  {
    path:"", component: DashboardComponent
  },
  {
    path:"dashboard", component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
