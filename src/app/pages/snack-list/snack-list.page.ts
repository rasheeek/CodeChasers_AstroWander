import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snack-list',
  templateUrl: './snack-list.page.html',
  styleUrls: ['./snack-list.page.scss'],
})
export class SnackListPage implements OnInit {

  snacks = [
    { name: "Stellar Cheddar Crisps", price: "50" },
    { name: "Cosmic Almond Crunch", price: "250" },
    { name: "Lunar Fruit Medley", price: "350" }
  ]

  galaxy = [
    { name: "Asteroid Cheese", price: "250" },
    { name: "Meteor Puffs Sampler", price: "450" },
    { name: "Celestial Popcorn Fusion", price: "650" }
  ]

  categories = ['snacks', 'meals', 'pluto-specials'];
  selectedCategory = 'snacks';


  constructor() { }

  ngOnInit() {
  }

  selectButton(category: string) {
    this.selectedCategory = category;
  }

}
