import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {

    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
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
    path: 'mytrips',
    loadChildren: () => import('./pages/mytrips/mytrips.module').then( m => m.MytripsPageModule)
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
    path: 'search-crafts',
    loadChildren: () => import('./pages/search-crafts/search-crafts.module').then( m => m.SearchCraftsPageModule)
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

  }








];

 @NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

