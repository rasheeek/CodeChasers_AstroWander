import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from 'src/app/shared/services/booking.service';
import { IPlanetShip } from 'src/app/shared/types/type.model';

@Component({
  selector: 'app-bookingsuccess',
  templateUrl: './bookingsuccess.page.html',
  styleUrls: ['./bookingsuccess.page.scss'],
})
export class BookingsuccessPage implements OnInit {

  selectedShip : IPlanetShip ;

  noOfAdults : number = 0 
  noOfChildren : number = 0
  noOfInfants : number = 0;
  today: Date = new Date();
  noOfTickets = 0;

  totalPrice : number = 0;
  bookingId : string = '';

  constructor(
    private router: Router,
    private bookingService : BookingService,
  ) { 
    this.selectedShip = this.bookingService.selectedShip as IPlanetShip;
  }


  ionViewWillEnter(){
    this.selectedShip = this.bookingService.selectedShip as IPlanetShip;
    this.noOfAdults = this.bookingService.noOfAdults;
    this.noOfChildren = this.bookingService.noOfChildren;
    this.noOfInfants = this.bookingService.noOfInfants;
    this.totalPrice = (this.selectedShip.price * this.noOfAdults) + (this.selectedShip.price/2 * this.noOfChildren);
    this.noOfTickets = this.noOfAdults + this.noOfChildren;
    this.bookingId = this.bookingService.bookingId;
  }

  ngOnInit() {
  }

  back(){
    this.router.navigate(['/tabs/home'])
  }

  myTrips(){
    this.router.navigate(['/mytrips'])
  }

}
