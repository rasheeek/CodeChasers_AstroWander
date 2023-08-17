import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selected-flight',
  templateUrl: './selected-flight.page.html',
  styleUrls: ['./selected-flight.page.scss'],
})
export class SelectedFlightPage implements OnInit {

  passenger = [
    { category: "Adult", detail: "Above 18 years", quantity: "02" },
    { category: "Children", detail: "Between 2 and 18 years", quantity: "00" },
    { category: "Infant", detail: "Below 2 years", quantity: "02" }
  ]

  constructor() { }

  ngOnInit() {
  }

}
