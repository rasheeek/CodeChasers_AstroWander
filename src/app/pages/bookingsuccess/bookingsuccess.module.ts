import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookingsuccessPageRoutingModule } from './bookingsuccess-routing.module';

import { BookingsuccessPage } from './bookingsuccess.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookingsuccessPageRoutingModule
  ],
  declarations: [BookingsuccessPage]
})
export class BookingsuccessPageModule {}
