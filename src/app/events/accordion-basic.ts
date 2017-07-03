import { Component, Input } from '@angular/core';
import { Event } from './event';
 // import { DomSanitizer } from '@angular/platform-browser';



@Component({
  selector: 'ngbd-accordion-basic',
  templateUrl: './accordion-basic.html'
})
export class NgbdAccordionBasic {
    @Input() events2017: Event[];
    @Input() events2018: Event[];
    //  constructor(public sanitizer: DomSanitizer){}

}
