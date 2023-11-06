import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FertilAgroModule } from './fertilagro/fertilagro.module';
import { FertilAgroBotoesModule } from './shared/components/fertilagro-botoes/fertilagro-botoes.module';
import { FertilAgroInputsModule } from './shared/components/fertilagro-inputs/fertilagro-inputs.module';
import { SharedModule } from './shared/shared.module';

  @NgModule({
    declarations: [
      AppComponent
    ],
    imports: [
      BrowserModule,
      CommonModule,
      ReactiveFormsModule,
      HttpClientModule,
      BrowserAnimationsModule,
      ButtonModule,
      FormsModule,
      MatCardModule,
      FertilAgroBotoesModule,
      SharedModule,

      AppRoutingModule,
      FertilAgroModule
    ],
    exports: [
      ButtonModule,
      SharedModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule {};
