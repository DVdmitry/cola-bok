import { Injectable } from "@angular/core";
import { Picture } from "./picture-class";
import { PictureMain } from "./picture-main";
import { FOTOCAROUSELMAIN } from "./carousel-main/carousel-data";
import { VIDEOMAIN } from "./carousel-main/carousel-data";
import { NAVPICTURE } from "./main-data";
import { Event } from "./events/event";
import { EVENTS2017 } from "./events/event-data";
import { EVENTS2018 } from "./events/event-data";
import { EVENTSARCHIVE } from "./archive/archive-data";
import { Archive } from "./archive/archive";
import { PUSCHA } from "./archive/past-events/puscha";

@Injectable ()
export class Service{
    getFoto(): Picture[]{
        return FOTOCAROUSELMAIN;
};

    getVideoMain(): Picture[]{
        return VIDEOMAIN;
};

    getNavData(): PictureMain []{
        return NAVPICTURE;
};

    getEvent2017(): Event[]{
        return EVENTS2017;
};

    getEvent2018(): Event[]{
    return EVENTS2018;
};

    getArchive(): Archive[]{
        return EVENTSARCHIVE;
    };

    getPuschaFoto(): Picture[]{
        return PUSCHA;
    };
}
