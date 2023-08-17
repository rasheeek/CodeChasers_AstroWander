import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectedFlightPage } from './selected-flight.page';

const routes: Routes = [
  {
    path: '',
    component: SelectedFlightPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectedFlightPageRoutingModule {}
