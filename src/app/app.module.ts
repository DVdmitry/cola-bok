import {RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NgbdCarouselConfig } from './carousel-main/carousel-config.component';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Service } from './service';
import { AppEvents } from './events/event.component';
import { NgbdAccordionBasic } from './events/accordion-basic';
import { FooterComponent } from './footer/footer.component';
import { BasicBlockComponent } from './basic-block/basic-block.component';
import { ArchiveComponent } from './archive/archive.component';
import { NgbdDropdownBasic } from './archive/dropdown-basic.component';
import { NgbdTabsetBasic } from './tabset/tabset-basic.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    NgbdCarouselConfig,
    AppEvents,
    NgbdAccordionBasic,
    FooterComponent,
    BasicBlockComponent,
    ArchiveComponent,
    NgbdDropdownBasic,
    NgbdTabsetBasic,
    AboutComponent,
    NewsComponent
  ],
  imports: [
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {
        path: 'events',
        component: AppEvents
    },
    {
        path: 'news',
        component: NewsComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
      {
          path: 'main',
          component: BasicBlockComponent
      },
      {
          path: '',
          redirectTo: '/main',
          pathMatch: 'full'
      },
      {
          path: 'archive',
          component: ArchiveComponent
      }

  ]),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [NgbCarouselConfig, Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
