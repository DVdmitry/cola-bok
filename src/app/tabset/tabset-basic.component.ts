import {Component, OnInit} from '@angular/core';
import { Picture } from '../picture-class';
import { Service } from '../service';

@Component({
  selector: 'ngbd-tabset-basic',
  templateUrl: './tabset-basic.html'
})
export class NgbdTabsetBasic {
    constructor (private service: Service){}

    puschaFoto: Picture[];

    ngOnInit(): void {
        this.puschaFoto = this.service.getPuschaFoto();
    }

 }
