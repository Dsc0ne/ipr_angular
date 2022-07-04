import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddressProgramsRoutingModule } from './address-programs-routing.module';
import {AddressProgramComponent} from '../address-program/address-program.component';
import {AddressProgramModalComponent} from '../address-program-modal/address-program-modal.component';
import {
    ButtonModule,
    FakeAppModule,
    IconModule,
    InputCompositionModule, InputSearchModule, ModalCompositionModule, PaginatorModule,
    SelectModule,
    TableModule,
    ThemeModule,
} from '@parma/gp-uikit-components';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonsModule} from '../../commons/commons.module';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';


@NgModule({
    declarations: [
        AddressProgramComponent,
        AddressProgramModalComponent
    ],
    exports: [
        AddressProgramModalComponent
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
        CommonsModule,
        PaginatorModule,
        ModalCompositionModule,
        MatInputModule,
        MatDatepickerModule,
        InputSearchModule
    ]
})
export class AddressProgramsModule { }
