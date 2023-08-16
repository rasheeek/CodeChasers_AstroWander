import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookingsuccessPage } from './bookingsuccess.page';

const routes: Routes = [
  {
    path: '',
    component: BookingsuccessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingsuccessPageRoutingModule {}
