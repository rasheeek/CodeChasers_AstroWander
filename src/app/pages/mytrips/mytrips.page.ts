import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from 'src/app/shared/services/booking.service';
import { IBooking } from 'src/app/shared/types/type.model';

@Component({
  selector: 'app-mytrips',
  templateUrl: './mytrips.page.html',
  styleUrls: ['./mytrips.page.scss'],
})
export class MytripsPage implements OnInit {
  bookings : IBooking ;
  noOfAdults : number = 0 
  noOfChildren : number = 0
  noOfInfants : number = 0;

  userBookings: IBooking[] = [];

  constructor(
    private router: Router,
    private bookingService : BookingService,
  ) {
    this.bookings = this.bookingService.bookings as IBooking;
   }

  ngOnInit() {
    const userId = localStorage.getItem('id');

    if (userId) {
      this.fetchUserBookings(userId);
    }
  }

  fetchUserBookings(userId: string) {
    this.bookingService.getUserBookings(userId).subscribe((bookings) => {
      this.userBookings = bookings;
      console.log(bookings);
      
    },(error) => console.log(error));
  }

  back(){
    this.router.navigate(['/tabs/home'])
  }

}
