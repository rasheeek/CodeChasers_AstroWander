import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScanMedicalPage } from './scan-medical.page';

const routes: Routes = [
  {
    path: '',
    component: ScanMedicalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScanMedicalPageRoutingModule {}
