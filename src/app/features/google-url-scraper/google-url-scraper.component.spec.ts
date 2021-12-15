import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleUrlScraperComponent } from './google-url-scraper.component';

describe('GoogleUrlScraperComponent', () => {
  let component: GoogleUrlScraperComponent;
  let fixture: ComponentFixture<GoogleUrlScraperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleUrlScraperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleUrlScraperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
