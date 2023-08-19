import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../pages/home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'mytrips',
        loadChildren: () => import('../pages/mytrips/mytrips.module').then( m => m.MytripsPageModule)
      },
      {
        path: 'search-crafts',
        loadChildren: () => import('../pages/search-crafts/search-crafts.module').then( m => m.SearchCraftsPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../pages/userprofile/userprofile.module').then(m => m.UserprofilePageModule)
      },
      
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
