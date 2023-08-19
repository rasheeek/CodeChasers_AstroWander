import { Component } from '@angular/core';
import { AuthenticationService } from './shared/services/authentication.service';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  constructor(private auth: AuthenticationService, private platform: Platform) {
    this.auth.checkAuthState();
  }

}
