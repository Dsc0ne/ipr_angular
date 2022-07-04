import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmergencyHousingRoutingModule } from './emergency-housing-routing.module';
import {EmergencyHousingComponent} from '../emergency-housing/emergency-housing.component';
import {CommonsModule} from '../../commons/commons.module';
import {ButtonModule, IconModule, InputSearchModule, PaginatorModule, TableModule, ThemeModule} from '@parma/gp-uikit-components';
import {AddressProgramsModule} from '../../address-programs/address-programs-module/address-programs.module';


@NgModule({
  declarations: [
    EmergencyHousingComponent
  ],
    imports: [
        CommonModule,
        EmergencyHousingRoutingModule,
        CommonsModule,
        ButtonModule,
        IconModule,
        ThemeModule,
        TableModule,
        InputSearchModule,
        PaginatorModule,
        AddressProgramsModule
    ]
})
export class EmergencyHousingModule { }
