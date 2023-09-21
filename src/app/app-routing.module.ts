import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login/login.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { BasicoBotaoAcaoComponent } from './shared/components/basico-botoes/components/basico-botao-acao.component';

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
    path:"teste", component: BasicoBotaoAcaoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
