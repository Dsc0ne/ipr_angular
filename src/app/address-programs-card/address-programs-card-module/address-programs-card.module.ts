import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddressProgramsCardRoutingModule } from './address-programs-card-routing.module';
import {AddressProgramCardComponent} from '../address-program-card/address-program-card.component';
import {
  ButtonModule,
  FakeAppModule, IconModule,
  InputCompositionModule,
  SelectModule, TableModule,
  ThemeModule
} from '@parma/gp-uikit-components';
import {ReactiveFormsModule} from '@angular/forms';
import {ComponentsKendoModule} from '@parma/gp-uikit-components-kendo';
import {CommonsModule} from "../../commons/commons.module";


@NgModule({
  declarations: [
    AddressProgramCardComponent
  ],
  imports: [
    CommonModule,
    AddressProgramsCardRoutingModule,
    InputCompositionModule,
    ReactiveFormsModule,
    FakeAppModule,
    SelectModule,
    ComponentsKendoModule,
    ButtonModule,
    ThemeModule,
    IconModule,
    TableModule,
    CommonsModule
  ]
})
export class AddressProgramsCardModule { }
