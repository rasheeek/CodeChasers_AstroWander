import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookingsuccess',
  templateUrl: './bookingsuccess.page.html',
  styleUrls: ['./bookingsuccess.page.scss'],
})
export class BookingsuccessPage implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  back(){
    this.router.navigate(['/payfinger'])
  }

  myTrips(){
    this.router.navigate(['/mytrips'])
  }

}
