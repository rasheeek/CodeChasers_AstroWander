import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-scan-medical',
  templateUrl: './scan-medical.page.html',
  styleUrls: ['./scan-medical.page.scss'],
})
export class ScanMedicalPage implements OnInit {

  constructor(
    private router: Router,
    private modalCtrl : ModalController
  ) { }

  ngOnInit() {

    //Mohamed and Riznas scanning codes 



    //after value
    //  this.modalCtrl.dismiss(scan.result);
    // this.modalCtrl.dismiss("AoyEOv6fVRusgvJqwi4l");
  }

  back(){
    this.modalCtrl.dismiss("AoyEOv6fVRusgvJqwi4l");
    // this.router.navigate(['/add-passengers']);
  }






}
