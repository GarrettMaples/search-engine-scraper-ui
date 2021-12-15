export interface UrlScrapeResultsModel {
  search: string,
  url: string,
  resultCount: number
  results: UrlScrapeResultModel[]
}

export interface UrlScrapeResultModel {
  index: number,
  url: string
}
