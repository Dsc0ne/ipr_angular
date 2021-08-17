import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {ButtonModule, HeaderMainModule, IconModule, ThemeModule, UserInfoModule} from '@parma/gp-uikit-components';


@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    HeaderMainModule,
    ThemeModule,
    ButtonModule,
    IconModule,
    // UserInfoModule
  ],
  exports: [
    HeaderComponent
  ]
})

export class CommonsModule {}
