import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AutomaticoFocusModule } from './directive/automatico-focus/automatico-focus.module';
import { DisableControlModule } from './directive/disable-control/disable-control.module';
import { CnpjcpfModule } from './directive/cnpjcpf/cnpjcpf.module';
import { MatSelectModule } from '@angular/material/select';

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
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    CnpjcpfModule,
    MatSelectModule
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
    AutomaticoFocusModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    CnpjcpfModule,
    MatSelectModule
  ],
  providers: [
    MessageService
  ]
})
export class SharedModule { }
