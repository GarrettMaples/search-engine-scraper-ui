import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlScrapeRequestFormComponent } from './url-scrape-request-form.component';

describe('UrlScrapeRequestFormComponent', () => {
  let component: UrlScrapeRequestFormComponent;
  let fixture: ComponentFixture<UrlScrapeRequestFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrlScrapeRequestFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlScrapeRequestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
