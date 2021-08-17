import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmergencyHousingComponent} from '../emergency-housing/emergency-housing.component';

const routes: Routes = [
  {
    path: '',
    component: EmergencyHousingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmergencyHousingRoutingModule { }
