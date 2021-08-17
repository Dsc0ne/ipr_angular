import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddressProgramComponent} from '../address-program/address-program.component';

const routes: Routes = [
  {
    path: '',
    component: AddressProgramComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddressProgramsRoutingModule { }
