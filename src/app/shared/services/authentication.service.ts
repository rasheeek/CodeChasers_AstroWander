

import { Injectable, NgZone } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from "@angular/router";


import { NavController } from "@ionic/angular";
import { BehaviorSubject, from, Subscription } from "rxjs";
// import { UserService } from "./user.service";

@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  userSubscription: any = new Subscription();
  fisrtTime: boolean = true;

  userDetails : BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(
    private afAuth: AngularFireAuth,
    private ngZone: NgZone,
    private navCtrl: NavController,
    // private userService: UserService,
  ) {}

  // public checkAuthState() {
  //   var that = this;
  //   this.fisrtTime = true;
  //   this.afAuth.onAuthStateChanged(async function (user) {
  //     if (user) {
  //       console.log("logged in", user);
  //       that.listenToUser(user.uid, user.email? user.email : '');

  //     } else {
  //       that.ngZone.run(() => {
  //         if (!that.fisrtTime) {
  //           that.signOut();
  //         }
  //       });
  //     }
  //     that.fisrtTime = false;
  //   });
  // }


  // listenToUser(id : string, email : string) {
  //   this.userSubscription = this.userService
  //     .listenToCurrentUser(id)
  //     .subscribe((res: any) => {
  //       console.log("User data updating", res);
  //       if (res) {
  //         res.email = email;
  //         res.uid = id;
  //         this.userDetails.next(res);
  //       } else {
  //         this.userDetails.next({ email: email, id: id })
  //       }
  //     });
  // }


  loginUser(email : string, password : string) {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.signInWithEmailAndPassword(email, password).then(
        (res : any) => {
          resolve(res);
        },
        (err : any) => reject(err)
      );
    });
  }


  sendPasswordResetEmail(email : string) {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.sendPasswordResetEmail(email).then(
        (res : any) => {
          resolve(res);
        },
        (err : any) => reject(err)
      );
    });
  }



  registerUser(email : string, password : string) {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.createUserWithEmailAndPassword(email, password).then(
        (res : any) => {
          resolve(res);
        },
        (err : any) => reject(err)
      );
    });
  }

  async resetPassword(email: string) {
    try {
      await this.afAuth.sendPasswordResetEmail(email);
      return alert("Please check your email to reset your password.");
    } catch (error) {
      return error;
    }
  }

  async signOut() {
    await this.afAuth.signOut();
    this.userSubscription.unsubscribe();
    localStorage.removeItem("id");
    this.navCtrl.navigateRoot("/login");
  }


}
