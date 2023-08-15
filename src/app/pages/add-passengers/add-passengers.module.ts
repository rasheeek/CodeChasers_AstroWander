import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPassengersPageRoutingModule } from './add-passengers-routing.module';

import { AddPassengersPage } from './add-passengers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddPassengersPageRoutingModule
  ],
  declarations: [AddPassengersPage]
})
export class AddPassengersPageModule {}
