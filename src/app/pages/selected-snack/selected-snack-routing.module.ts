import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectedSnackPage } from './selected-snack.page';

const routes: Routes = [
  {
    path: '',
    component: SelectedSnackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectedSnackPageRoutingModule {}
