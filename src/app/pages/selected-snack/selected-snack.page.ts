import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selected-snack',
  templateUrl: './selected-snack.page.html',
  styleUrls: ['./selected-snack.page.scss'],
})
export class SelectedSnackPage implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  back(){
    this.router.navigate(['/snack-list'])
  }

}
