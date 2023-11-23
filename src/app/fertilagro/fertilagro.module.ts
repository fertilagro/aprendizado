import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FertilAgroRoutingRoutingModule } from './fertilagro-routing.module';
import { GerModule } from './ger/ger.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FertilAgroRoutingRoutingModule
  ],
  exports: [
    GerModule
  ]
})
export class FertilAgroModule { }
