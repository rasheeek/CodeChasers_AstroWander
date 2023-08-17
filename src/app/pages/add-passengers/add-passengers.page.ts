import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-passengers',
  templateUrl: './add-passengers.page.html',
  styleUrls: ['./add-passengers.page.scss'],
})
export class AddPassengersPage implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  back(){
    this.router.navigate(['/selected-flight']);
  }

  scan(){
    this.router.navigate(['/scan-medical']);
  }

  confirmDetails(){
    this.router.navigate(['/seat-booking']);
  }

}
