import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectedFlightPageRoutingModule } from './selected-flight-routing.module';

import { SelectedFlightPage } from './selected-flight.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectedFlightPageRoutingModule
  ],
  declarations: [SelectedFlightPage]
})
export class SelectedFlightPageModule {}
