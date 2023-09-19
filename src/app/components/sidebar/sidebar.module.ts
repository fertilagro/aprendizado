import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class SidebarModule { }
