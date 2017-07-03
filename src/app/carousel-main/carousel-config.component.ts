import {Component, OnInit} from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import {Picture} from "../picture-class";
import {Service} from "../service";


@Component({
  selector: 'ngbd-carousel-config',
  templateUrl: './carousel-config.html'

})
export class NgbdCarouselConfig implements OnInit {
    fotoCarouselMain: Picture[];
    videoMain: Picture[];

    fotoService = new Service();
    videoMainService = new Service();

    ngOnInit(): void {
        this.getFoto();
        this.getVideoMain();
    }

    getVideoMain(): void {
        this.videoMain = this.videoMainService.getVideoMain();
    }

    getFoto(): void {
        this.fotoCarouselMain = this.fotoService.getFoto();
    }

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 3000;
    config.wrap = true;
    config.keyboard = true;
  }
}
