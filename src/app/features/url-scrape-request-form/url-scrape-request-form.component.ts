import {Component, Input} from '@angular/core';
import {UrlScrapeRequestModel} from "../../models/url-scrape-request-model";
import {UrlScrapeResultsModel} from "../../models/url-scrape-results-model";
import {GoogleUrlScraperService} from "../../api-services/google-url-scraper.service";
import {catchError, Observable, throwError} from "rxjs";

@Component({
  selector: 'app-url-scrape-request-form',
  templateUrl: './url-scrape-request-form.component.html',
  styleUrls: ['./url-scrape-request-form.component.css']
})
export class UrlScrapeRequestFormComponent {

  @Input() urlScrapeResultsModel = new Observable<UrlScrapeResultsModel>();

  error = false;
  submitted = false;

  urlScrapeRequestModel = new UrlScrapeRequestModel("efiling integration", "www.infotrack.com", 100);

  constructor(private googleUrlScraperService: GoogleUrlScraperService) {
  }

  onSubmit() {
    this.submitted = true;
    this.error = false;

    this.googleUrlScraperService.get(this.urlScrapeRequestModel.search, this.urlScrapeRequestModel.url, this.urlScrapeRequestModel.resultCount)
      .pipe(
        source => this.urlScrapeResultsModel = source,
        catchError(err => {
          this.error = true;
          return throwError(err);
        }))
      .subscribe();
  }

}
