import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DropdownModule } from 'primeng/dropdown';
import { SharedModule } from '../../shared.module';
import { FertilAgroFkFieldComponent } from './components/fertilagro-Fkfield.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

@NgModule({
  declarations: [
    FertilAgroFkFieldComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    DropdownModule,
    MatSnackBarModule,
    MatAutocompleteModule
    ],
  exports: [
    FertilAgroFkFieldComponent
  ]
})
export class FertilAgroFkFieldModule { }
