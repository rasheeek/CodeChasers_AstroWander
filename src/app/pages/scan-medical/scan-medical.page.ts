import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scan-medical',
  templateUrl: './scan-medical.page.html',
  styleUrls: ['./scan-medical.page.scss'],
})
export class ScanMedicalPage implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  back(){
    this.router.navigate(['/add-passengers']);
  }

}
