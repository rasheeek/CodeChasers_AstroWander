import { AuthenticationService } from "./authentication.service";
import { Injectable } from "@angular/core";
import { AlertController } from "@ionic/angular";

@Injectable({
  providedIn: "root",
})
export class AlertService {

  constructor(
    private alertCtrl: AlertController,
    private authService: AuthenticationService
  ) {}

  public async showAlert(header : string, message : string, buttons : any[]) {
    const alert = await this.alertCtrl.create({
      header: header,
      message: message,
      buttons: buttons,
    });
    alert.present();
  }

  public async showFirebaseAlert(error : any) {
    if (error.code != "permission-denied") {
      const alert = await this.alertCtrl.create({
        header: "Error",
        message: error.message,
        buttons: ["Okay"],
      });
      alert.present();
    } else {
      this.authService.signOut();
    }
  }



}
