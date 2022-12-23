import { Component, OnInit } from '@angular/core';
import { Aereo } from "../../models/aereo.model";
import { AereoService } from "../../services/aereo.service";

@Component({
  selector: 'app-add-aereo',
  templateUrl: './add-aereo.component.html',
  styleUrls: ['./add-aereo.component.css']
})
export class AddAereoComponent implements OnInit{
  aereo: Aereo = {
    modello: '',
    codiceCompagnia: 0,
    posti: 0,
    annoCostruzione: 0
  };
  submitted = false;

  constructor(private service: AereoService) {}

  ngOnInit(): void {}

  save(): void{
    const data = {
      modello: this.aereo.modello,
      codiceCompagnia: this.aereo.codiceCompagnia,
      posti: this.aereo.posti,
      annoCostruzione: this.aereo.annoCostruzione
    };

    this.service.create(data).subscribe({
      next: (res) =>{
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });
  }

  newAirplane(): void {
    this.submitted = false;
    this.aereo = {
      modello: '',
      codiceCompagnia: 0,
      posti: 0,
      annoCostruzione: 0
    };
  }
}
