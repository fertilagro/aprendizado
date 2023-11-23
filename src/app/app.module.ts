import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { TabMenuModule } from 'primeng/tabmenu';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FertilAgroModule } from './fertilagro/fertilagro.module';
import { FertilAgroBotoesModule } from './shared/components/fertilagro-botoes/fertilagro-botoes.module';
import { DisableControlModule } from './shared/directive/disable-control/disable-control.module';
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
      MatIconModule,
      MatAutocompleteModule,
      DisableControlModule,
      TabMenuModule,
      MatButtonModule,
      MatToolbarModule,
      MatMenuModule,

      AppRoutingModule,
    ],
    exports: [
      ButtonModule,
      SharedModule,
      MatIconModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  })

  export class AppModule {
  };
