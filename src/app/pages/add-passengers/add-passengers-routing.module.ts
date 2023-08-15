import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPassengersPage } from './add-passengers.page';

const routes: Routes = [
  {
    path: '',
    component: AddPassengersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddPassengersPageRoutingModule {}
