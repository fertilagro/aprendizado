import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from '../../shared.module';
import { FertilagroInputsComponent } from './components/fertilagro-inputs.component';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    FertilagroInputsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule
    ],
  exports: [
    FertilagroInputsComponent
  ]
})
export class FertilAgroInputsModule { }
