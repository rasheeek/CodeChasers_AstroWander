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
  }






];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
