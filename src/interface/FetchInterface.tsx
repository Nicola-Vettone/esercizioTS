export interface IArticle {
  count: number;
  next: string;
  previous: null | string;
  results: IDati[];
}

export interface Author {
  name: string;
  socials: ISocials;
}

export interface ISocials {
  x: string;
  youtube: string;
  instagram: string;
  linkedin: string;
  mastodon: string;
  bluesky: string;
}

export interface IDati {
  id: number;
  title: string;
  url: string;
  image_url: string;
  news_site: string;
  summary: string;
  published_at: string;
  updated_at: string;
  featured: boolean;
  launches: string[];
  events: string[];
}
