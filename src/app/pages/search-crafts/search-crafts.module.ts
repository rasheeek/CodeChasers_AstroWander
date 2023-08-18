import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchCraftsPageRoutingModule } from './search-crafts-routing.module';

import { SearchCraftsPage } from './search-crafts.page';
// import { FilterByPlanetPipe } from 'src/app/shared/pipes/filter-by-planet.pipe';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchCraftsPageRoutingModule,
    SharedModule
    // FilterByPlanetPipe
  ],
  declarations: [SearchCraftsPage]
})
export class SearchCraftsPageModule {}
