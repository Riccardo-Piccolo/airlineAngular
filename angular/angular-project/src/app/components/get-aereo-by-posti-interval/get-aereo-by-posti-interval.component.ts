import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-get-aereo-by-posti-interval',
  templateUrl: './get-aereo-by-posti-interval.component.html',
  styleUrls: ['./get-aereo-by-posti-interval.component.css']
})
export class GetAereoByPostiIntervalComponent implements OnInit{
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(result => {
      console.log(`postiMin: ${result.get('postiMin')}`);
      console.log(`postiMax: ${result.get('postiMax')}`);
    });
  }
}
