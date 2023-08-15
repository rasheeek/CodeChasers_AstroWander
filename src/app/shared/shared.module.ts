import { OneLineItemSkeletonComponent } from './components/one-line-item-skeleton/one-line-item-skeleton.component';
import { HomeSkeletonCardComponent } from './components/home-skeleton-card/home-skeleton-card.component';
import { ItemSkeletonComponent } from './components/item-skeleton/item-skeleton.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    MainHeaderComponent,
    ItemSkeletonComponent,
    HomeSkeletonCardComponent,
    OneLineItemSkeletonComponent
  ],
  imports: [ReactiveFormsModule, CommonModule, FormsModule, IonicModule],
  exports: [
    ReactiveFormsModule,
    MainHeaderComponent,
    ItemSkeletonComponent,
    HomeSkeletonCardComponent,
    OneLineItemSkeletonComponent
  ],
})
export class SharedModule {}
