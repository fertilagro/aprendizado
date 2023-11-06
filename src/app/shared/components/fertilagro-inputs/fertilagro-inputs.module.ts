import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from '../../shared.module';
import { FertilagroInputsComponent } from './components/fertilagro-inputs.component';

@NgModule({
  declarations: [
    FertilagroInputsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatInputModule,
    ReactiveFormsModule
    ],
  exports: [
    FertilagroInputsComponent
  ]
})
export class FertilAgroInputsModule { }
