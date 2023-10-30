import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login/login.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { BasicoBotaoAcaoComponent } from './shared/components/basico-botoes/components/basico-botao-acao.component';
import { ConsultaCepComponent } from './components/consulta_cep/consulta-cep/consulta-cep.component';

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
