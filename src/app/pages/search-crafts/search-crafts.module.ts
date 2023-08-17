import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchCraftsPageRoutingModule } from './search-crafts-routing.module';

import { SearchCraftsPage } from './search-crafts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchCraftsPageRoutingModule
  ],
  declarations: [SearchCraftsPage]
})
export class SearchCraftsPageModule {}
