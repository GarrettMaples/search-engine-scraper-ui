import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {GoogleUrlScraperComponent} from './features/google-url-scraper/google-url-scraper.component';
import {UrlScrapeRequestFormComponent} from "./features/url-scrape-request-form/url-scrape-request-form.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    GoogleUrlScraperComponent,
    UrlScrapeRequestFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
