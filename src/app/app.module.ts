import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule }     from './app-routing.module';
import { AppComponent }         from './app.component';

import { Theme }         from './theme/theme.component';


import {NewsComponent, getHostNamePip } from './news/news.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // )
  ],
  declarations:[AppComponent, NewsComponent, getHostNamePip, Theme],
  bootstrap: [ AppComponent ]
})
export class AppModule { }