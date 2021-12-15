import { TestBed } from '@angular/core/testing';

import { GoogleUrlScraperService } from './google-url-scraper.service';

describe('GoogleUrlScraperService', () => {
  let service: GoogleUrlScraperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoogleUrlScraperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
