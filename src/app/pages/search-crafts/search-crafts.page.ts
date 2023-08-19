import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { utcToZonedTime } from 'date-fns-tz';
import { BookingService } from 'src/app/shared/services/booking.service';
import { IPlanetShip } from 'src/app/shared/types/type.model';

@Component({
  selector: 'app-search-crafts',
  templateUrl: './search-crafts.page.html',
  styleUrls: ['./search-crafts.page.scss'],
})
export class SearchCraftsPage implements OnInit {
  selectedSortIndex = 0;
  fromPlanetFilter: string = '';
  toPlanetFilter: string = '';
  startDate: string = '';
  occasionStartDate: any;
  occasionEndDate: any;

  startDateVal: string = '';
  endDateVal: string = '';

  planetShips: IPlanetShip[] = [];
  

  cards = [
    {
      companyName: 'CosmicJet Airlines',
      flightCode: 'CJ-2024A712',
      price: '2800k',
      way: 'Two way round',
    },
    {
      companyName: 'NebulaAir Voyages',
      flightCode: 'NV-3056B934',
      price: '3100k',
      way: 'Two way round',
    },
    {
      companyName: 'StarHopper Excursion',
      flightCode: 'SH-4028C587',
      price: '4900k',
      way: 'Two way round',
    },
    {
      companyName: 'AstroBreeze Airlines',
      flightCode: 'AB-7034F109',
      price: '5100k',
      way: 'Two way round',
    },
  ];

  constructor(
    private router: Router,
    private bookingService: BookingService,
    private loadingCtrl: LoadingController,
    private changeDetector : ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.loadingCtrl.create().then((loadingEl) => {
      loadingEl.present();
      this.bookingService.getAllShips().subscribe(
        (res) => {
          console.log('All ships', res);
          this.planetShips = res;
          this.sortChanged();
          loadingEl.dismiss();
        },
        (err) => {
          loadingEl.dismiss();
        }
      );
    });
  }

  book(selectedShip: IPlanetShip) {
    this.bookingService.selectedShip = selectedShip;
    this.router.navigate(['/selected-flight']);
  }

  setStartDate(dateValue: any) {
    console.log('bvalue', dateValue);
    dateValue = dateValue.split('T')[0];
    const dt = new Date(dateValue);
    const selectedDate = new Date(
      dt.valueOf() + dt.getTimezoneOffset() * 60 * 1000
    );
    this.startDateVal = this.getDateStringWithoutTimeZone(selectedDate);
  }

  getDateStringWithoutTimeZone(date: Date) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  setEndDate(dateValue: any) {
    // this.occasionEndDate = dateValue;
    dateValue = dateValue.split('T')[0];
    const dt = new Date(dateValue);
    const selectedDate = new Date(
      dt.valueOf() + dt.getTimezoneOffset() * 60 * 1000
    );
    this.endDateVal = this.getDateStringWithoutTimeZone(selectedDate);
  }


  sortChanged(){
    console.log(this.selectedSortIndex);
    
    if (this.selectedSortIndex == 0) {
      this.planetShips = [...this.planetShips].sort((a, b) => a.price - b.price);
    } else if (this.selectedSortIndex == 2) {
      this.planetShips = [...this.planetShips].sort((a, b) => {
        const durationA = Math.abs(a.arrivalDate.toDate() - a.departureDate.toDate()) / (1000 * 60 * 60 * 24);
        const durationB = Math.abs(b.arrivalDate.toDate() - b.departureDate.toDate()) / (1000 * 60 * 60 * 24);
        return durationA - durationB;
      });
    }
    console.log(this.planetShips);
    this.changeDetector.detectChanges();
  }


}
