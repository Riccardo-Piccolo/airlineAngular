import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AereoListComponent } from './components/aereo-list/aereo-list.component';
import {AddAereoComponent} from "./components/add-aereo/add-aereo.component";
import {DeleteAereoComponent} from "./components/delete-aereo/delete-aereo.component";
import {DeleteAllAereoComponent} from "./components/delete-all-aereo/delete-all-aereo.component";
import {GetAereoByAnnoComponent} from "./components/get-aereo-by-anno/get-aereo-by-anno.component";
import {
  GetAereoByAnnoIntervalComponent
} from "./components/get-aereo-by-anno-interval/get-aereo-by-anno-interval.component";
import {GetAereoByCodiceComponent} from "./components/get-aereo-by-codice/get-aereo-by-codice.component";
import {GetAereoByModelloComponent} from './components/get-aereo-by-modello/get-aereo-by-modello.component';
import {GetAereoByPostiComponent} from './components/get-aereo-by-posti/get-aereo-by-posti.component';
import {GetAereoByPostiIntervalComponent} from "./components/get-aereo-by-posti-interval/get-aereo-by-posti-interval.component";
import {UpdateAereoComponent} from "./components/update-aereo/update-aereo.component";
import {
  GetAereoByCodiceCompagniaComponent
} from "./components/get-aereo-by-codice-compagnia/get-aereo-by-codice-compagnia.component";

const routes: Routes = [
  {path: '', redirectTo: 'listaAerei', pathMatch: 'full'},
  {path: 'listaAerei', component: AereoListComponent},
  {path: 'aggiungiAereo', component: AddAereoComponent},
  {path: 'rimuoviAereo/:codice', component: DeleteAereoComponent},
  {path: 'rimuoviAllAerei', component: DeleteAllAereoComponent},
  {path: 'getAereoAnno/:anno', component: GetAereoByAnnoComponent},
  {path: 'getAereoAnni/:annoMin/:annoMax', component: GetAereoByAnnoIntervalComponent},
  {path: 'getAereoCodice/:codice', component: GetAereoByCodiceComponent},
  {path: 'getAereoModello/:modello', component: GetAereoByModelloComponent},
  {path: 'getAereoPosti/:posti', component: GetAereoByPostiComponent},
  {path: 'getAereoPosti/:postiMin/:postiMax', component: GetAereoByPostiIntervalComponent},
  {path: 'updateAereo/:codice', component: UpdateAereoComponent },
  {path: 'getAereoCompagnia/:codice', component: GetAereoByCodiceCompagniaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
