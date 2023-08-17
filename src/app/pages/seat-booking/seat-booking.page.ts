import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seat-booking',
  templateUrl: './seat-booking.page.html',
  styleUrls: ['./seat-booking.page.scss'],
})
export class SeatBookingPage implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  back(){
    this.router.navigate(['/add-passengers']);
  }

  continue(){
    this.router.navigate(['/snack-list']);
  }

}
