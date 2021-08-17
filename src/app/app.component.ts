import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {PopUpService} from "@parma/gp-uikit-components";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  constructor(
    private popUpService: PopUpService,
    private viewContainerRef: ViewContainerRef,
  ) {}

  ngOnInit() {
    this.popUpService.setViewContainerRef(this.viewContainerRef);
  }
}
