import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, Platform } from '@ionic/angular';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

@Component({
  selector: 'app-scan-medical',
  templateUrl: './scan-medical.page.html',
  styleUrls: ['./scan-medical.page.scss'],
})
export class ScanMedicalPage implements OnInit {

  constructor(
    private router: Router,
    private modalCtrl : ModalController,
    private platform : Platform
  ) { }

  ngOnInit() {
    this.platform.ready().then(async (res) => {
      const status = await BarcodeScanner.checkPermission({ force: true });
      if (status.granted) {
        await BarcodeScanner.checkPermission({ force: true });
        BarcodeScanner.hideBackground();
        document.querySelector('body')?.classList.add('scanner-active');
        const result = await BarcodeScanner.startScan();
        if (result.hasContent) {
          BarcodeScanner.showBackground();
          document.querySelector('body')?.classList.remove('scanner-active');
          BarcodeScanner.stopScan();
          this.modalCtrl.dismiss(result.content);
        }
      }
      console.log('Permission rejected');
      return false;
    });

    //after value
    //  this.modalCtrl.dismiss(scan.result);
    // this.modalCtrl.dismiss("AoyEOv6fVRusgvJqwi4l");
  }

  back(){
    this.modalCtrl.dismiss("AoyEOv6fVRusgvJqwi4l");
    // this.router.navigate(['/add-passengers']);
  }






}
