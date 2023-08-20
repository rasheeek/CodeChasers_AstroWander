import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { Platform } from '@ionic/angular';
import { BookingService } from 'src/app/shared/services/booking.service';
import { ToastService } from 'src/app/shared/services/toast.service';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.page.html',
  styleUrls: ['./scan.page.scss'],
})
export class ScanPage implements OnInit {

  constructor(private platform : Platform, private bookingService  : BookingService, private router : Router, private toastService : ToastService) { }

  ionViewWillEnter(){
   this.platform.ready().then(async (res) => {
      const status = await BarcodeScanner.checkPermission({ force: true });
    console.log("here 1");
    
      if (status.granted) {
        // the user granted permission
        console.log("here 2");
        // make background of WebView transparent
        // note: if you are using ionic this might not be enough, check below
        BarcodeScanner.hideBackground();
        console.log("here 3");
        document.querySelector('body')?.classList.add('scanner-active');
        const result = await BarcodeScanner.startScan(); // start scanning and wait for a result
        console.log("here 4");
        // if the result has content
        if (result.hasContent) {
          console.log("Result", result);
          
          this.toastService.presentToast(result.content);
          BarcodeScanner.showBackground();
          document.querySelector('body')?.classList.remove('scanner-active');
          BarcodeScanner.stopScan();

          console.log(result.content); // log the raw scanned content
          this.bookingService.scannedId = result.content;
          this.router.navigate(['/add-passengers'], {queryParams : {isScanned : 'true'}, skipLocationChange : true})
          // this.updateData(result.content);
        }
        console.log("here 5");
      }
      console.log('Permission rejected');
      console.log("here 6");
      return false;
    });
  }


  ionViewWillLeave() {
    document.querySelector('body')?.classList.remove('scanner-active');
    BarcodeScanner.showBackground();
    BarcodeScanner.stopScan();
  }


  ngOnInit() {


  }


}
