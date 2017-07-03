import { Component, OnInit } from '@angular/core';
import {Picture } from "./picture-class";
import {AppEvents} from './events/event.component';
import {Service} from "./service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
  // styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  navData: Picture[];

  constructor (private service: Service){};

  selectedPicture: Picture;

  ngOnInit(): void {
      this.getNavData();
  }

  getNavData(): void{
      this.navData = this.service.getNavData();
  }

  onSelect(myPicture: Picture): void {
      this.selectedPicture = myPicture;
  }
}
