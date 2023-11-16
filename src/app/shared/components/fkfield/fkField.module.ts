import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { DisableControlModule } from '../../directive/disable-control/disable-control.module';
import { SharedModule } from '../../shared.module';
import { FkfieldComponent } from './components/fkField.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    FkfieldComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatAutocompleteModule,
    DisableControlModule,
    MatDialogModule
  ],
  exports: [
    FkfieldComponent
  ]
})
export class FkFieldModule { }
