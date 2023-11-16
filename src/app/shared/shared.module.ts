import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AutomaticoFocusModule } from './directive/automatico-focus/automatico-focus.module';
import { DisableControlModule } from './directive/disable-control/disable-control.module';
import { DashboardModule } from '../dashboard/dashboard.module';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    MatMenuModule,
    RouterModule,
    MatToolbarModule,
    MatInputModule,
    DisableControlModule,
    AutomaticoFocusModule,
  ],
  exports: [
    CommonModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    MatMenuModule,
    RouterModule,
    MatToolbarModule,
    MatInputModule,
    DisableControlModule,
    AutomaticoFocusModule
  ],
  providers: [
    MessageService
  ]
})
export class SharedModule { }
