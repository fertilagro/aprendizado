import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { FertilagroInputsComponent } from './components/fertilagro-inputs.component';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

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
