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
import { BasicoBotaoModule } from './shared/components/basico-botao/basico-botao.module';
import { FertilAgroBotoesModule } from './shared/components/fertilagro-botoes/fertilagro-botoes.module';

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

      AppRoutingModule,
      FertilAgroModule
    ],
    exports: [
      ButtonModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule {};
