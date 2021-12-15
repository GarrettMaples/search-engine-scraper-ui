export class UrlScrapeRequestModel {
  constructor(
    public search: string,
    public url: string,
    public resultCount: number
  ) {
  }
}
