import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(
    private router: Router,
    private bookingService : BookingService,
    private modalCtrl : ModalController,
    private loadingCtrl : LoadingController,
    private userService : UserService,
    private alertService : AlertService
    
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
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
    this.router.navigate(['/scan-medical']);
  }

  confirmDetails(){
    this.router.navigate(['/seat-booking']);
  }


  async openQR(array : any, index : number){
    const modal = await this.modalCtrl.create({
      component : ScanMedicalPage
    })
    modal.onDidDismiss().then(data=>{
        if(data.data){
          this.loadingCtrl.create().then(loadingEl=>{
            
            loadingEl.present();
            this.userService.getUserDetailsById(data.data).subscribe(res=>{
              if(res && res.name){
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
    modal.present();
  }


}
