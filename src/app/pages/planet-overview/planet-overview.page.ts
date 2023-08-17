import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-planet-overview',
  templateUrl: './planet-overview.page.html',
  styleUrls: ['./planet-overview.page.scss'],
})
export class PlanetOverviewPage implements OnInit {

  selectedButtonIndex = 0;
  images = [
    { backgroundImage: 'jupiter1.jpeg'},
    { backgroundImage: 'jupiter2.jpeg'},
    { backgroundImage: 'jupiter3.jpg'},
  ];

  items = [
    { img: 'directions_walk.png', heading1: 'Floating Skywalks', heading2: "Elevated paths offer panoramic views of jupiter's swirling cloudscape."},
    { img: 'cyclone.png', heading1: 'Storm Safaris', heading2: 'uided tours to witness colossal storms and turbulent atmospheric phenomena.'},
    { img: 'theaters.png', heading1: 'Holographic Celestial Shows', heading2: ' Immersive displays projecting captivating cosmic events.'},
    { img: 'hot_tub.png', heading1: 'Atmospheric Spa Retreats', heading2: 'Luxurious relaxation within floating resorts amidst vibrant atmospheric colors.'},
  ];

  details = [
    { backgroundImage: 'details1.png', heading1: 'Red Spot Balloon Tours', heading2: "150km from Galactiport City"},
    { backgroundImage: 'details2.png', heading1: 'Celestial Scuba Diving', heading2: '10km from Novastrata City'},
  ];

  flights = [
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

  cards = [
    { companyName: 'CosmicJet Airlines', flightCode: 'CJ-2024A712', price: '2800k', way: 'Two way round' },
    { companyName: 'NebulaAir Voyages', flightCode: 'NV-3056B934', price: '3100k', way: 'Two way round' },
    { companyName: 'StarHopper Excursion', flightCode: 'SH-4028C587', price: '4900k', way: 'Two way round' },
    { companyName: 'AstroBreeze Airlines', flightCode: 'AB-7034F109', price: '5100k', way: 'Two way round' },
  ];

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  back(){
    this.router.navigate(['/tabs/home'])
  }

  book(){
    this.router.navigate(['/selected-flight'])
  }

  toggleSelectedButtonIndex(index: number) {
    this.selectedButtonIndex = index;
  }

}
