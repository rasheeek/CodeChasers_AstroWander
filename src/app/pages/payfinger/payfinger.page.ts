import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payfinger',
  templateUrl: './payfinger.page.html',
  styleUrls: ['./payfinger.page.scss'],
})
export class PayfingerPage implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  back(){
    this.router.navigate(['/payment']);
  }

  confirm(){
    this.router.navigate(['/bookingsuccess']);
  }

}
