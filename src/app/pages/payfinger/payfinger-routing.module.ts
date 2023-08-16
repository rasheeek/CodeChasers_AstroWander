import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PayfingerPage } from './payfinger.page';

const routes: Routes = [
  {
    path: '',
    component: PayfingerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PayfingerPageRoutingModule {}
