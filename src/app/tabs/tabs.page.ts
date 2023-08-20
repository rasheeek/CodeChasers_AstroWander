import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  isCenterBtnSelected = false
  constructor(
    private router: Router,
  ) {
    // console.log('this.router.url', this.router.url);
    router.events.subscribe((val) => {
      // see also 
      // console.log('this.router.url', this.router.url);

      if(this.router.url == '/tabs/home'){
        this.isCenterBtnSelected = true;
      }
      else{
        this.isCenterBtnSelected = false;
      }
  });
  }
  ngOnInit() {
    console.log('this.router.url', this.router.url);
  }

}
