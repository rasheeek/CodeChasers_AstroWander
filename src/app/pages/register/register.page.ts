import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  signupForm: FormGroup;
  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private loadingCtrl : LoadingController,
    private userService : UserService,
    private alertService : AlertService
  ) {
    this.signupForm = new FormGroup({
      username: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl('')
    });
  }

  ngOnInit() {
  }

  back() {
    this.router.navigate(['']);
  }

  async signup() {
    const email = this.signupForm.get('email')?.value;
    const password = this.signupForm.get('password')?.value;
    const name = this.signupForm.get('username')?.value;
    this.loadingCtrl.create({ keyboardClose: true }).then((loadingEl) => {
      loadingEl.present();
      this.authService
        .registerUser(
          this.signupForm.value.email,
          this.signupForm.value.password
        )
        .then(
          (res) => {
            let data = {
              dateCreated: new Date(),
              dateEdited: new Date(),
              name: name,
              email: email,
              uid: res.user.uid,
              isActive: true,
              astroCredits : 20000,
              stellarBits : 20000,
              celestiaCoin : 20000
            };
            this.userService.addUser(data, res.user.uid).subscribe(
              (resp) => {
                console.log(resp);
                loadingEl.dismiss();
                this.signupForm.reset();
                localStorage.setItem('id', res.user.uid);
                this.router.navigate(['/tabs/home']);
              },
              (err) => {
                loadingEl.dismiss();
                this.alertService.showFirebaseAlert(err);
              }
            );
          },
          (err) => {
            loadingEl.dismiss();
            this.alertService.showFirebaseAlert(err);
          }
        );
    });
  }

}
