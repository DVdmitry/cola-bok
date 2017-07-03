import { Component, OnInit } from '@angular/core';
import { Service } from '../service';
import { Archive } from './archive';

@Component({
    selector: 'app-archive',
    templateUrl: './archive.component.html'
})

export class ArchiveComponent implements OnInit{
    constructor (private service: Service){}
    eventsArchive: Archive[];

    ngOnInit(): void{
        this.eventsArchive = this.service.getArchive();
    }
}
