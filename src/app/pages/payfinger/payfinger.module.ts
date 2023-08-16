import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PayfingerPageRoutingModule } from './payfinger-routing.module';

import { PayfingerPage } from './payfinger.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PayfingerPageRoutingModule
  ],
  declarations: [PayfingerPage]
})
export class PayfingerPageModule {}
