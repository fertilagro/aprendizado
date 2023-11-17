import { NgModule } from '@angular/core';
import { GerRoutingModule } from './ger-routing.module';
import { PessoaModule } from './pessoa/pessoa.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CidadeModule } from './cidade/cidade.module';

@NgModule({
  declarations: [],
  imports: [
    GerRoutingModule,
    PessoaModule,
    SharedModule,
    CidadeModule
  ],
  exports: [
    PessoaModule
  ]
})
export class GerModule {}
