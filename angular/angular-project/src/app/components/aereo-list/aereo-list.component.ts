import { Component, OnInit } from '@angular/core';
import { Aereo } from "../../models/aereo.model";
import { AereoService } from "../../services/aereo.service";

@Component({
  selector: 'app-aereo-list',
  templateUrl: './aereo-list.component.html',
  styleUrls: ['./aereo-list.component.css']
})
export class AereoListComponent implements OnInit{
  aerei?: Aereo[];
  aereoCorrente: Aereo = {};
  indice = -1;
  modello = '';
  postiMin = 0;
  postiMax = 0;
  annoMin = 0;
  annoMax = 0;
  posti = 0;
  anno = 0;
  codiceCompagnia = 0;


  constructor(private service: AereoService) {
  }

  ngOnInit():void {
    this.retrieveAerei();
  }

  retrieveAerei(): void{
    this.service.getAll().subscribe({
      next: (data) => {
        this.aerei = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  refreshList(): void {
    this.retrieveAerei();
    this.aereoCorrente = {};
    this.indice = -1;
  }

  setActiveAereo(aereo: Aereo, indice: number): void{
    this.aereoCorrente = aereo;
    this.indice = indice;
  }

  removeAllAerei(): void{
    this.service.deleteAll().subscribe({
      next: (res) => {
        console.log(res);
        this.refreshList();
      },
      error: (e) => console.error(e)
    });
  }

  searchModello(): void{
    this.aereoCorrente = {};
    this.indice = -1;

    this.service.findByModello(this.modello).subscribe({
      next: (data) => {
        this.aerei = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  searchPostiInterval(): void{
    this.aereoCorrente = {};
    this.indice = -1;

    this.service.findByPostiInterval(this.postiMin, this.postiMax).subscribe({
      next: (data) => {
        this.aerei = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  searchAnniInterval(): void{
    this.aereoCorrente = {};
    this.indice = -1;

    this.service.findByAnniInterval(this.annoMin, this.annoMax).subscribe({
      next: (data) => {
        this.aerei = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  searchAnno(): void{
    this.aereoCorrente = {};
    this.indice = -1;

    this.service.findByAnno(this.anno).subscribe({
      next: (data) => {
        this.aerei = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  searchPosti(): void{
    this.aereoCorrente = {};
    this.indice = -1;

    this.service.findByPosti(this.posti).subscribe({
      next: (data) => {
        this.aerei = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  searchCompagnia(): void{
    this.aereoCorrente = {};
    this.indice = -1;

    this.service.findByCodiceCompagnia(this.codiceCompagnia).subscribe({
      next: (data) => {
        this.aerei = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

}
