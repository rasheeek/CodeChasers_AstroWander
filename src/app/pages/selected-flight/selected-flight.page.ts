import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
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
    private bookingService : BookingService,
    private alertCtrl: AlertController,
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.selectedShip = this.bookingService.selectedShip;
  }

  back(){
    this.router.navigate(['/tabs/search-crafts']);
  }

  continue() {
    if (this.passenger[0].quantity === 0 && this.passenger[1].quantity === 0 && this.passenger[2].quantity === 0) {
      this.showQuantityAlert('Please select at least one passenger quantity.');
    } else if (this.passenger[0].quantity === 0 && this.passenger[2].quantity > 0) {
      this.showQuantityAlert('Please select at least one adult passenger.');
    } else {
      this.bookingService.noOfAdults = this.passenger[0].quantity;
      this.bookingService.noOfChildren = this.passenger[1].quantity;
      this.bookingService.noOfInfants = this.passenger[2].quantity;
      this.router.navigate(['/add-passengers']);
    }
  }
  
  async showQuantityAlert(message: string) {
    const alert = await this.alertCtrl.create({
      header: 'Select Quantity',
      message: message,
      buttons: ['OK']
    });
    await alert.present();
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
