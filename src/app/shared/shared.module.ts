import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    MatMenuModule
  ],
  exports: [
    CommonModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    MatMenuModule
  ]
})
export class SharedModule { }
