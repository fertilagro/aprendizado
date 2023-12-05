import { NgModule } from '@angular/core';
import { GerRoutingModule } from './ger-routing.module';
import { ComponentsComponent } from './amostra/components/components.component';

@NgModule({
  declarations: [
    ComponentsComponent
  ],
  imports: [
    GerRoutingModule
  ],
  exports: [

  ]
})
export class GerModule {}
