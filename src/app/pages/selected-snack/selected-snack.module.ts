import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectedSnackPageRoutingModule } from './selected-snack-routing.module';

import { SelectedSnackPage } from './selected-snack.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectedSnackPageRoutingModule
  ],
  declarations: [SelectedSnackPage]
})
export class SelectedSnackPageModule {}
