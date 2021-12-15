import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {UrlScrapeResultsModel} from "../models/url-scrape-results-model";

@Injectable({
  providedIn: 'root'
})
export class GoogleUrlScraperService {

  baseUrl = 'http://localhost:5000/api/google-scrape/url-scrape'

  constructor(private httpClient: HttpClient) { }

  get(search: string, url: string, resultCount: number): Observable<UrlScrapeResultsModel> {
    let params = new HttpParams()
      .set('search', search)
      .set('url', url)
      .set('resultCount', resultCount);

    return this.httpClient.get<UrlScrapeResultsModel>(this.baseUrl, { params: params });
  }
}
