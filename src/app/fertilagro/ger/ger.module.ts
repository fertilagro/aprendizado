import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CidadeModule } from './cidade/cidade.module';
import { GerRoutingModule } from './ger-routing.module';
import { PessoaModule } from './pessoa/pessoa.module';

@NgModule({
  declarations: [],
  imports: [
    GerRoutingModule,
    PessoaModule,
    SharedModule,
    CidadeModule,

  ],
  exports: [
    PessoaModule
  ]
})
export class GerModule {}
