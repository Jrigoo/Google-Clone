export interface IGoogleResponse {
  kind: string;
  url: {
    type: string;
    template: string;
  };
  queries: {
    request: [
      {
        title: string;
        totalResults: string;
        searchTerms: string;
        count: number;
        startIndex: number;
        inputEncoding: string;
        outputEncoding: string;
        safe: string;
        cx: string;
      }
    ];
  };
  context: {
    title: string;
  };
  searchInformation: {
    searchTime: number;
    formattedSearchTime: string;
    totalResults: string;
    formattedTotalResults: string;
  };
  items: Array<{
    kind: string;
    title: string;
    htmlTitle: string;
    link: string;
    displayLink: string;
    snippet: string;
    htmlSnippet: string;
    cacheId: string;
    formattedUrl: string;
    htmlFormattedUrl: string;
    pagemap: {
      cse_thumbnail: [
        {
          src: string;
          width: string;
          height: string;
        }
      ];
      metatags: [
        {
          "og:image": string;
          referrer: string;
          "og:url": string;
        }
      ];
      cse_image: [
        {
          src: string;
        }
      ];
    };
  }>;
}
