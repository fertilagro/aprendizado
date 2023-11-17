import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PessoaComponent } from './fertilagro/ger/pessoa/components/pessoa/pessoa.component';
import { CidadeComponent } from './fertilagro/ger/cidade/components/cidade/cidade.component';

const routes: Routes = [
  {
    path:"",
    pathMatch: "full",
    redirectTo: "dashboard"
  },
  {
    path:"pessoas", component: PessoaComponent
  },
  {
    path:"cidade", component: CidadeComponent
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
