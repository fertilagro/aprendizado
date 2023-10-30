import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultaCepRoutingModule } from './consulta-cep-routing.module';
import { ConsultaCepComponent } from './consulta-cep/consulta-cep.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ConsultaCepComponent
  ],
  imports: [
    CommonModule,
    ConsultaCepRoutingModule,
    SharedModule
  ]
})
export class ConsultaCepModule { }
