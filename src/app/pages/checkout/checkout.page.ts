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

  selectedShip : IPlanetShip | null = null;

  passenger = [
    { name: "Stellar Cheddar Crisps", price: "850k", quantity: "02" },
    { name: "Cosmic Almonmd Crunch", price: "550k", quantity: "04" },
    { name: "CosmicJet Airlines", price: "350k", quantity: "03" }
  ]

  constructor(
    private router: Router,
    private bookingService : BookingService,
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.selectedShip = this.bookingService.selectedShip;
  }

  back(){
    this.router.navigate(['/add-passengers']);
  }

  pay(){
    this.router.navigate(['/payment']);
  }

}
