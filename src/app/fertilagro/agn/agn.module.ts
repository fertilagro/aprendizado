import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AgnRoutingModule } from '../ger/ger-routing.module';

@NgModule({
  declarations: [],
  imports: [
    AgnRoutingModule,
    SharedModule
  ],
  exports: [

  ]
})
export class AgnModule {}
