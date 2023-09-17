import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { NavbarModule } from '../components/navbar/navbar.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputTextModule,
    FormsModule,
    ButtonModule
  ],
  exports: [
    CommonModule,
    InputTextModule,
    FormsModule,
    ButtonModule
  ]
})
export class SharedModule { }
