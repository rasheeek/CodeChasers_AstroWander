import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from 'src/app/shared/services/booking.service';
import { IPlanetShip } from 'src/app/shared/types/type.model';

@Component({
  selector: 'app-selected-flight',
  templateUrl: './selected-flight.page.html',
  styleUrls: ['./selected-flight.page.scss'],
})
export class SelectedFlightPage implements OnInit {

  selectedShip : IPlanetShip | null = null;

  passenger = [
    { category: "Adult", detail: "Above 18 years", quantity: 0 },
    { category: "Children", detail: "Between 2 and 18 years", quantity: 0 },
    { category: "Infant", detail: "Below 2 years", quantity: 0 }
  ]

  constructor(
    private router: Router,
    private bookingService : BookingService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.selectedShip = this.bookingService.selectedShip;
  }

  back(){
    this.router.navigate(['/tabs/search-crafts']);
  }

  continue(){
    this.bookingService.noOfAdults = this.passenger[0].quantity;
    this.bookingService.noOfChildren = this.passenger[1].quantity;
    this.bookingService.noOfInfants = this.passenger[2].quantity;
    this.router.navigate(['/add-passengers']);
  }


  removePassenger(type : any){
    if(type.quantity > 0){
      type.quantity = type.quantity -1
    }
  }


  addPassenger(type : any){
    type.quantity = type.quantity + 1;
  }





}
