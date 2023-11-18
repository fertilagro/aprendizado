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
import { SharedModule } from './shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { DisableControlModule } from './shared/directive/disable-control/disable-control.module';
import { TabMenuModule } from 'primeng/tabmenu';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';

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
      FertilAgroModule
    ],
    exports: [
      ButtonModule,
      SharedModule,
      MatIconModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule {};
