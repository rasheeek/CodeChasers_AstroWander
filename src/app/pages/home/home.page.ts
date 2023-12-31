import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { PlanetsService } from 'src/app/shared/services/planets.service';
import { IFlights, IPlanet } from 'src/app/shared/types/type.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  planets: IPlanet[] = [];
  flights: IFlights[] = [];

  planetsDetails = [
    { backgroundImage: 'mars.png', heading1: 'Mars', heading2: '1 Day travel' },
    { backgroundImage: 'pluto.png', heading1: 'Pluto', heading2: '1 Day travel' },
    { backgroundImage: 'jupiter.jpeg', heading1: 'Jupiter', heading2: '1 Day travel' },
    { backgroundImage: 'saturn.jpeg', heading1: 'Saturn', heading2: '1 Day travel' },
    { backgroundImage: 'venus.jpeg', heading1: 'Venus', heading2: '1 Day travel' },
    { backgroundImage: 'uranus.jpg', heading1: 'Uranus', heading2: '1 Day travel' },
    { backgroundImage: 'neptune.jpeg', heading1: 'Neptune', heading2: '1 Day travel' },
    { backgroundImage: 'mercury.jpeg', heading1: 'Mercury', heading2: '1 Day travel' },
    { backgroundImage: 'earth.jpg', heading1: 'Earth', heading2: '1 Day travel' },
  ];

  flightsDetails = [
    { backgroundImage: 'plutoflight.png', heading1: 'Pluto', heading2: 'Air Shuttle 150 ', heading3: '1 day travel ', heading4: '$1750k', heading5: 'Two way trip' },
    { backgroundImage: 'mercuryflight.png', heading1: 'Mercury', heading2: 'Air Shuttle 01 ', heading3: '1 day travel ', heading4: '$8500k', heading5: 'Two way trip'  },
    { backgroundImage: 'plutoflight.png', heading1: 'Mars', heading2: 'Air Shuttle 150', heading3: '1 day travel ', heading4: '$1750k', heading5: 'Two way trip'  },
    { backgroundImage: 'mercuryflight.png', heading1: 'Jupiter', heading2: 'Air Shuttle 01 ', heading3: '1 day travel ', heading4: '$1750k', heading5: 'Two way trip'  },
    { backgroundImage: 'plutoflight.png', heading1: 'Saturn', heading2: 'Air Shuttle 01 ', heading3: '1 day travel ', heading4: '$1750k', heading5: 'Two way trip'  },
    { backgroundImage: 'mercuryflight.png', heading1: 'Venus', heading2: 'Air Shuttle 150', heading3: '1 day travel ', heading4: '$1750k', heading5: 'Two way trip'  },
    { backgroundImage: 'plutoflight.png', heading1: 'Uranus', heading2: 'Air Shuttle 150', heading3: '1 day travel ', heading4: '$1750k', heading5: 'Two way trip'  },
    { backgroundImage: 'mercuryflight.png', heading1: 'Neptune', heading2: 'Air Shuttle 150', heading3: '1 day travel ', heading4: '$1750k', heading5: 'Two way trip'  },
    { backgroundImage: 'mercuryflight.png', heading1: 'Earth', heading2: 'Air Shuttle 150', heading3: '1 day travel ', heading4: '$1750k', heading5: 'Two way trip'  },
  ];

  constructor(
    private router: Router,
    private planetService : PlanetsService,
    private loadingCtrl : LoadingController,
  ) { }

  ngOnInit() {
    this.loadingCtrl.create().then(loadingEl => {
      loadingEl.present();
      this.planetService.getAllPlanets().subscribe(res=> {
        
        this.planets = res;
        loadingEl.dismiss();
      }, (err=>{
        loadingEl.dismiss();
      }))
    });

    this.loadingCtrl.create().then(loadingEl => {
      loadingEl.present();
      this.planetService.getAllFlights().subscribe(res=> {        
        this.flights = res;
        loadingEl.dismiss();
      }, (err=>{
        loadingEl.dismiss();
      }))
    })
  }

  overview(){
    this.router.navigate(['/planet-overview']);
  }

}
