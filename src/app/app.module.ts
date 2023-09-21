import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login/login.component';
import { NavbarModule } from './components/navbar/navbar.module';
import { SidebarComponent } from './components/sidebar/sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { SharedModule } from './shared/shared.module';

  @NgModule({
    declarations: [
      AppComponent,
      LoginComponent,
      DashboardComponent,
      SidebarComponent

    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      SharedModule,
      NavbarModule,

      CommonModule,
      ReactiveFormsModule,
      HttpClientModule,
      BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule {
  };
