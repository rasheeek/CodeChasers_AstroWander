import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';
import { BookingService } from 'src/app/shared/services/booking.service';
import { ScanMedicalPage } from '../scan-medical/scan-medical.page';
import { UserService } from 'src/app/shared/services/user.service';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-add-passengers',
  templateUrl: './add-passengers.page.html',
  styleUrls: ['./add-passengers.page.scss'],
})
export class AddPassengersPage implements OnInit {

  noOfAdults : number = 2;
  noOfChildren : number = 0
  noOfInfants : number = 0;


  adults : any[] = [];
  infants : any[] = [];
  children : any[] = [];


  scanningArray : any;
  scanningIndex : number = 0;

  constructor(
    private router: Router,
    private bookingService : BookingService,
    private modalCtrl : ModalController,
    private loadingCtrl : LoadingController,
    private userService : UserService,
    private alertService : AlertService,
    private route : ActivatedRoute

  ) { 
    this.route.queryParams.subscribe((res) => {
      let isScanned = res['isScanned'];
      if(isScanned){
        this.loadingCtrl.create().then(loadingEl=>{

          loadingEl.present();
          this.userService.getUserDetailsById(this.bookingService.scannedId).subscribe(res=>{
            if(res && res.name){
              console.log("Loaded user details", res);
              let array;
              if(this.scanningArray == 1){
                array = this.adults;
              }else if(this,this.scanningArray == 2){
                array = this.children;
              }else{
                array = this.infants;
              }

              let index = this.scanningIndex;
                array[index].name  = res.name;
                array[index].age  = res.age;
                array[index].isScanned  = true;
            }else{
              this.alertService.showAlert("Error", "Invalid QR", ['Okay'])
            }
            loadingEl.dismiss();
          },(err=>{
            this.alertService.showAlert("Error", "Invalid QR", ['Okay'])
          }))

        })
      }
    })
  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.adults = [];
    this.children = [];
    this.infants = [];
    this.noOfAdults = this.bookingService.noOfAdults;
    for(let i =0; i < this.noOfAdults; i++){
      this.adults.push({isScanned : false})
    }
    this.noOfChildren = this.bookingService.noOfChildren;
    for(let i =0; i < this.noOfChildren; i++){
      this.children.push({isScanned : false})
    }
    this.noOfInfants = this.bookingService.noOfInfants;
    for(let i =0; i < this.noOfInfants; i++){
      this.infants.push({isScanned : false})
    }
  }

  back(){
    this.router.navigate(['/selected-flight']);
  }

  scan(){
    this.router.navigate(['/scan']);
  }

  confirmDetails(){
    this.router.navigate(['/checkout']);
  }


  async openQR(array : number, index : number){


    this.scanningArray = array;
    this.scanningIndex = index;
    this.router.navigate(['/scan']);



    // const modal = await this.modalCtrl.create({
    //   component : ScanMedicalPage
    // })
    // modal.onDidDismiss().then(data=>{
    //     if(data.data){
     
    //     }
    // })
    // modal.present();
  }


}
