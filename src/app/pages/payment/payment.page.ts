import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { BookingService } from 'src/app/shared/services/booking.service';
import { UserService } from 'src/app/shared/services/user.service';
import { IBooking, IPlanetShip } from 'src/app/shared/types/type.model';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
  selectedShip: IPlanetShip;
  today: Date = new Date();
  userDetails: any = {};

  noOfAdults: number = 2;
  noOfChildren: number = 0;
  noOfInfants: number = 0;
  totalPrice: number = 0;

  selectedCoin: 'celestiaCoin' | 'stellarBits' | 'astroCredits' =
    'astroCredits';
  constructor(
    private router: Router,
    private bookingService: BookingService,
    private authService: AuthenticationService,
    private loadingCtrl: LoadingController,
    private userService: UserService
  ) {
    this.selectedShip = this.bookingService.selectedShip as IPlanetShip;
  }

  ionViewWillEnter() {
    this.selectedShip = this.bookingService.selectedShip as IPlanetShip;
    this.noOfAdults = this.bookingService.noOfAdults;
    this.noOfChildren = this.bookingService.noOfChildren;
    this.noOfInfants = this.bookingService.noOfInfants;
    this.totalPrice =
      this.selectedShip.price * this.noOfAdults +
      (this.selectedShip.price / 2) * this.noOfChildren;
  }

  ngOnInit() {
    this.authService.userDetails.subscribe((res) => {
      if (res) {
        this.userDetails = res;
      } else {
        this.userDetails = {};
      }
    });
  }

  back() {
    this.router.navigate(['/checkout']);
  }

  purchase() {
    this.loadingCtrl.create().then((loadingEl) => {
      loadingEl.present();

      let data: IBooking = {
        addedDate: new Date(),
        noOfAdults: this.noOfAdults,
        noOfChildren: this.noOfChildren,
        noOfInfants: this.noOfInfants,
        shipId: this.selectedShip.id as string,
        uid: this.userDetails.uid,
      };

      this.bookingService.addBooking(data).subscribe((res) => {
        let userData = {
          [this.selectedCoin]:
            this.userDetails[this.selectedCoin] - this.totalPrice,
        };
        this.userService.updateUser(this.userDetails.uid, userData).subscribe(
          (resp) => {
            loadingEl.dismiss(); 
            this.bookingService.bookingId = res;
            this.router.navigate(['/bookingsuccess']);         },
          (err) => {
            console.log("Err", err);
            loadingEl.dismiss();          }
        );
      },(err=>{
        console.log("Err", err);
        loadingEl.dismiss();
    }));
    });
   
  }

  getCoinName(code: 'celestiaCoin' | 'stellarBits' | 'astroCredits') {
    if (code == 'astroCredits') {
      return 'AstroCredits';
    } else if (code == 'celestiaCoin') {
      return 'CelestiaCoin';
    } else {
      return 'StellarBits';
    }
  }
}
