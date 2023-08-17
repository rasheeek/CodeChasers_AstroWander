import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SnackListPage } from './snack-list.page';

const routes: Routes = [
  {
    path: '',
    component: SnackListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SnackListPageRoutingModule {}
