import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GerModule } from './ger/ger.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GerModule
  ],
  exports: [
    GerModule
  ]
})
export class FertilAgroModule { }
