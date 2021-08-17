import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {
  ButtonModule,
  ComponentsModule,
  IconModule,
  ThemeModule
} from '@parma/gp-uikit-components';
import {SidebarComponent} from './commons/sidebar/sidebar.component';
import '@progress/kendo-angular-intl/locales/ru/all';
import '@progress/kendo-angular-intl/locales/ru/calendar';
import {AddressProgramsModule} from './address-programs/address-programs-module/address-programs.module';
import {EmergencyHousingModule} from './emergency-housing/emergency-housing-module/emergency-housing.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AddressProgramsModule,
    EmergencyHousingModule,
    ComponentsModule,
    ThemeModule,
    IconModule,
    ButtonModule,
    HttpClientModule
  ],

  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
