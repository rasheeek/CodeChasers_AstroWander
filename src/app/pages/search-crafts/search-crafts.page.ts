import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { BookingService } from 'src/app/shared/services/booking.service';
import { IPlanetShip } from 'src/app/shared/types/type.model';

@Component({
  selector: 'app-search-crafts',
  templateUrl: './search-crafts.page.html',
  styleUrls: ['./search-crafts.page.scss'],
})
export class SearchCraftsPage implements OnInit {

  selectedSortIndex = 0;

  planetShips : IPlanetShip[] = [];

  cards = [
    { companyName: 'CosmicJet Airlines', flightCode: 'CJ-2024A712', price: '2800k', way: 'Two way round' },
    { companyName: 'NebulaAir Voyages', flightCode: 'NV-3056B934', price: '3100k', way: 'Two way round' },
    { companyName: 'StarHopper Excursion', flightCode: 'SH-4028C587', price: '4900k', way: 'Two way round' },
    { companyName: 'AstroBreeze Airlines', flightCode: 'AB-7034F109', price: '5100k', way: 'Two way round' },
  ];

  constructor(
    private router: Router,
    private bookingService : BookingService,
    private loadingCtrl : LoadingController
  ) { }

  ngOnInit() {
    this.loadingCtrl.create().then(loadingEl=>{
      loadingEl.present();
      this.bookingService.getAllShips().subscribe(res=>{
        console.log("All ships", res);
        this.planetShips = res;
        loadingEl.dismiss();
      },(err=>{
        loadingEl.dismiss();
      }))
    })
  }

  book(selectedShip : IPlanetShip){
    this.bookingService.selectedShip = selectedShip;
    this.router.navigate(['/selected-flight'])
  }



}
