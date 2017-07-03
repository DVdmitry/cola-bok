import { Component, OnInit } from '@angular/core';
import { NgbdAccordionBasic } from './accordion-basic';
import { Event } from './event';
import { Service } from '../service';

@Component({
    selector: 'app-events',
    template: `
    <ngbd-accordion-basic [events2017] = "events2017" [events2018] = "events2018"></ngbd-accordion-basic>`
})

export class AppEvents implements OnInit{
    events2017: Event[];
    events2018: Event[];
    constructor(private service: Service){}
    ngOnInit(): void{
        this.events2017 = this.service.getEvent2017();
        this.events2018 = this.service.getEvent2018();
    }
}
