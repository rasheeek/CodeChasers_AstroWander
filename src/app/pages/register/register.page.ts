import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

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

    try {
      const registrationResult = await this.authService.registerUser(email, password);
      this.router.navigate(['/tabs/home']);
      console.log('Registration successful', registrationResult);
    } catch (error) {
      console.error('Registration error', error);
    }
  }

}
