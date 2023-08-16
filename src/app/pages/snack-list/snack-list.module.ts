import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SnackListPageRoutingModule } from './snack-list-routing.module';

import { SnackListPage } from './snack-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SnackListPageRoutingModule
  ],
  declarations: [SnackListPage]
})
export class SnackListPageModule {}
