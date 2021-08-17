import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddressProgramsRoutingModule } from './address-programs-routing.module';
import {AddressProgramComponent} from '../address-program/address-program.component';
import {
  ButtonModule,
  FakeAppModule,
  IconModule,
  InputCompositionModule,
  SelectModule,
  TableModule,
  ThemeModule,
} from '@parma/gp-uikit-components';
import {ReactiveFormsModule} from '@angular/forms';
import {CalendarModule, ComponentsKendoModule} from '@parma/gp-uikit-components-kendo';
import {IntlModule} from '@progress/kendo-angular-intl';
import {CommonsModule} from '../../commons/commons.module';


@NgModule({
  declarations: [
    AddressProgramComponent,
  ],
  imports: [
    CommonModule,
    AddressProgramsRoutingModule,
    ButtonModule,
    IconModule,
    TableModule,
    ThemeModule,
    InputCompositionModule,
    FakeAppModule,
    SelectModule,
    ReactiveFormsModule,
    ComponentsKendoModule,
    CalendarModule,
    IntlModule,
    CommonsModule
  ]
})
export class AddressProgramsModule { }
