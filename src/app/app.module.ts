import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login/login.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http'

  @NgModule({
    declarations: [
      AppComponent,
      LoginComponent
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      SharedModule,

      CommonModule,
      ReactiveFormsModule,
      HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule {
  };

