import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MatInputModule } from '@angular/material/input';

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
  ],
  exports: [
    CommonModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    MatMenuModule,
    RouterModule,
    MatToolbarModule,
    MatInputModule
  ]
})
export class SharedModule { }
