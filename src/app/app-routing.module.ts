import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login/login.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { BasicoBotoesAcaoComponent } from './shared/components/basico-botoes/basico-botao/basico-botao.component';

const routes: Routes = [
  {
    path:"",
    pathMatch: "full",
    redirectTo: "dashboard"
  },
  {
    path:"login", component: LoginComponent
  },
  {
    path:"", component: LoginComponent
  },
  {
    path:"dashboard", component: DashboardComponent
  },
  {
    path:"teste", component: BasicoBotoesAcaoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
