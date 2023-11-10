import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { PessoaComponent } from './fertilagro/ger/pessoa/components/pessoa/pessoa.component';
import { FertilAgroComponent } from './fertilagro/fertilagro/fertilagro.component';

const routes: Routes = [
  {
    path:"",
    pathMatch: "full",
    redirectTo: "dashboard"
  },
  {
    path:"pessoa", component: PessoaComponent
  },
  {
    path:"", component: AppComponent
  },
  {
    path:"dashboard", component: AppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
