import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.page.html',
  styleUrls: ['./userprofile.page.scss'],
})
export class UserprofilePage implements OnInit {

  constructor(private alertController : AlertController, private authService : AuthenticationService) { }

  ngOnInit() {
  }


  async logOut() {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'Are you sure you want to logout?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: (blah) => {},
          cssClass: 'alert-btn',
        },
        {
          text: 'Yes',
          cssClass: 'alert-btn',
          handler: () => {
            this.authService.signOut();
          },
        },
      ],
    });
    await alert.present();
  }

}
