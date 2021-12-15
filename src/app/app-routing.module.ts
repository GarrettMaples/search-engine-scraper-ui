import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoogleUrlScraperComponent } from "./features/google-url-scraper/google-url-scraper.component";

const routes: Routes = [
  { path: 'google-url-scrape', component: GoogleUrlScraperComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
