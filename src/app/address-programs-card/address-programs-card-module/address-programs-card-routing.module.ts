import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddressProgramCardComponent} from '../address-program-card/address-program-card.component';

const routes: Routes = [
  {
    path: '',
    component: AddressProgramCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddressProgramsCardRoutingModule { }
