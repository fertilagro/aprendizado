import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FertilAgroRoutingRoutingModule } from './fertilagro-routing.module';
import { GerModule } from './ger/ger.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,

    FertilAgroRoutingRoutingModule
  ],
  exports: [
    GerModule
  ]
})
export class FertilAgroModule { }
