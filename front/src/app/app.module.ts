import { HttpClientModule } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrintStatistiqueComponent } from './print-statistique/print-statistique.component';
import { FormulaireComponent } from './formulaire/formulaire.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, PrintStatistiqueComponent, FormulaireComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
