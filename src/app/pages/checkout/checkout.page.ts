import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from 'src/app/shared/services/booking.service';
import { IPlanetShip } from 'src/app/shared/types/type.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

  selectedShip : IPlanetShip ;

  noOfAdults : number = 0 
  noOfChildren : number = 0
  noOfInfants : number = 0;


  totalPrice : number = 0;
  

  passenger = [
    { name: "Stellar Cheddar Crisps", price: "850k", quantity: "02" },
    { name: "Cosmic Almonmd Crunch", price: "550k", quantity: "04" },
    { name: "CosmicJet Airlines", price: "350k", quantity: "03" }
  ]

  constructor(
    private router: Router,
    private bookingService : BookingService,
  ) { 
    this.selectedShip = this.bookingService.selectedShip as IPlanetShip;
  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.selectedShip = this.bookingService.selectedShip as IPlanetShip;
    this.noOfAdults = this.bookingService.noOfAdults;
    this.noOfChildren = this.bookingService.noOfChildren;
    this.noOfInfants = this.bookingService.noOfInfants;
    this.totalPrice = (this.selectedShip.price * this.noOfAdults) + (this.selectedShip.price/2 * this.noOfChildren);
  }

  back(){
    this.router.navigate(['/add-passengers']);
  }

  pay(){
    this.router.navigate(['/payment']);
  }

}
