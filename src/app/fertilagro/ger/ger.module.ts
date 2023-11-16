import { NgModule } from '@angular/core';
import { GerRoutingModule } from './ger-routing.module';
import { PessoaModule } from './pessoa/pessoa.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    GerRoutingModule,
    PessoaModule,
    SharedModule
  ],
  exports: [
    PessoaModule
  ]
})
export class GerModule {}
