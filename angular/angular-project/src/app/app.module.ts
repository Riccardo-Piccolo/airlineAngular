import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAereoComponent } from './components/add-aereo/add-aereo.component';
import { UpdateAereoComponent } from './components/update-aereo/update-aereo.component';
import { AereoListComponent } from './components/aereo-list/aereo-list.component';
import { GetAereoByCodiceComponent } from './components/get-aereo-by-codice/get-aereo-by-codice.component';
import { DeleteAereoComponent } from './components/delete-aereo/delete-aereo.component';
import { DeleteAllAereoComponent } from './components/delete-all-aereo/delete-all-aereo.component';
import { GetAereoByModelloComponent } from './components/get-aereo-by-modello/get-aereo-by-modello.component';
import { GetAereoByPostiIntervalComponent } from './components/get-aereo-by-posti-interval/get-aereo-by-posti-interval.component';
import { GetAereoByAnnoIntervalComponent } from './components/get-aereo-by-anno-interval/get-aereo-by-anno-interval.component';
import { GetAereoByAnnoComponent } from './components/get-aereo-by-anno/get-aereo-by-anno.component';
import { GetAereoByPostiComponent } from './components/get-aereo-by-posti/get-aereo-by-posti.component';

@NgModule({
  declarations: [
    AppComponent,
    AddAereoComponent,
    UpdateAereoComponent,
    AereoListComponent,
    GetAereoByCodiceComponent,
    DeleteAereoComponent,
    DeleteAllAereoComponent,
    GetAereoByModelloComponent,
    GetAereoByPostiIntervalComponent,
    GetAereoByAnnoIntervalComponent,
    GetAereoByAnnoComponent,
    GetAereoByPostiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
