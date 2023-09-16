import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from '../components/navbar/navbar/navbar.component';
import { NavbarModule } from '../components/navbar/navbar.module';

@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule, 
    SharedModule,
    NavbarModule
  ]
})
export class DashboardModule { }
