import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Search Engine Scraper';

  constructor(private router: Router) {
  }

  navigateTo(event: Event) {
    let linkValue = (<HTMLInputElement>event.target).value
    if (linkValue && linkValue != '--Select Option--') {
      this.router.navigate([linkValue]);
    }
    return false;
  }
}
