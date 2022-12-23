import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-get-aereo-by-anno-interval',
  templateUrl: './get-aereo-by-anno-interval.component.html',
  styleUrls: ['./get-aereo-by-anno-interval.component.css']
})
export class GetAereoByAnnoIntervalComponent implements OnInit {
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(result => {
      console.log(`annoMin: ${result.get('annoMin')}`);
      console.log(`annoMax: ${result.get('annoMax')}`);
    });
  }
}
