import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanetOverviewPage } from './planet-overview.page';

const routes: Routes = [
  {
    path: '',
    component: PlanetOverviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanetOverviewPageRoutingModule {}
