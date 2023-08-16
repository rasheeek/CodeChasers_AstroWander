import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScanMedicalPageRoutingModule } from './scan-medical-routing.module';

import { ScanMedicalPage } from './scan-medical.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScanMedicalPageRoutingModule
  ],
  declarations: [ScanMedicalPage]
})
export class ScanMedicalPageModule {}
