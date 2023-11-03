import { NgModule } from '@angular/core';
import { GerRoutingModule } from './ger-routing.module';
import { PessoaModule } from './pessoa/pessoa.module';

@NgModule({
  declarations: [],
  imports: [
    GerRoutingModule,
    PessoaModule
  ],
  exports: [
    PessoaModule
  ]
})
export class GerModule {}
