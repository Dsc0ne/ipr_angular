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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
