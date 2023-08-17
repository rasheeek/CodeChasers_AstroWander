import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {

    path: '',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'fingerprint',
    loadChildren: () => import('./pages/fingerprint/fingerprint.module').then( m => m.FingerprintPageModule)
  },
  {
    path: 'bookingsuccess',
    loadChildren: () => import('./pages/bookingsuccess/bookingsuccess.module').then( m => m.BookingsuccessPageModule)
  },
  {
    path: 'payfinger',
    loadChildren: () => import('./pages/payfinger/payfinger.module').then( m => m.PayfingerPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./pages/payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'planet-overview',
    loadChildren: () => import('./pages/planet-overview/planet-overview.module').then( m => m.PlanetOverviewPageModule)
  },
  {
    path: 'add-passengers',
    loadChildren: () => import('./pages/add-passengers/add-passengers.module').then( m => m.AddPassengersPageModule)
  },
  {
    path: 'scan-medical',
    loadChildren: () => import('./pages/scan-medical/scan-medical.module').then( m => m.ScanMedicalPageModule)
  },
  {
    path: 'seat-booking',
    loadChildren: () => import('./pages/seat-booking/seat-booking.module').then( m => m.SeatBookingPageModule)
  },
  {
    path: 'snack-list',
    loadChildren: () => import('./pages/snack-list/snack-list.module').then( m => m.SnackListPageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./pages/checkout/checkout.module').then( m => m.CheckoutPageModule)
  },
  {
     path: 'selected-flight',
    loadChildren: () => import('./pages/selected-flight/selected-flight.module').then( m => m.SelectedFlightPageModule)

  },  {
    path: 'selected-snack',
    loadChildren: () => import('./pages/selected-snack/selected-snack.module').then( m => m.SelectedSnackPageModule)
  }

];

 @NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

