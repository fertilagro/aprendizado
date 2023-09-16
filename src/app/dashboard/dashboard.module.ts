import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavbarModule } from '../components/navbar/navbar.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NavbarModule
  ]
})
export class DashboardModule { }
