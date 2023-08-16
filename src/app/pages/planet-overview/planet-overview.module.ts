import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlanetOverviewPageRoutingModule } from './planet-overview-routing.module';

import { PlanetOverviewPage } from './planet-overview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlanetOverviewPageRoutingModule
  ],
  declarations: [PlanetOverviewPage]
})
export class PlanetOverviewPageModule {}
