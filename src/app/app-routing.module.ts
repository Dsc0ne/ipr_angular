import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: 'address-programs',
    loadChildren: () => import('./address-programs/address-programs-module/address-programs.module').then(m => m.AddressProgramsModule),
  },
  {
    path: 'emergency-housing',
    loadChildren: () => import('./emergency-housing/emergency-housing-module/emergency-housing.module').then(m => m.EmergencyHousingModule)
  },
  {
    path: 'address-program-card',
    loadChildren: () => import('./address-programs-card/address-programs-card-module/address-programs-card.module').then(m => m.AddressProgramsCardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
