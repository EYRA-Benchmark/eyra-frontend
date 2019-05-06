
export interface IPrismicResult<T> {
  data: T;
  alternate_languages: string[];
  first_publication_date: string | null;
  href: string;
  id: string;
  lang?: string;
  last_publication_date: string | null;
  linked_documents?: any[];
  slugs: string[];
  tags: string[];
  type: string;
  uid?: string;
}

export interface IPrismicSearchResponse<T> {
  license?: 'string';
  next_page: any;
  page: number;
  prev_page: any;
  results: Array<IPrismicResult<T>>;
  results_per_page: number;
  results_size: number;
  total_pages: number;
  total_results_size: number;
  version?: string;
}

export interface INews {
  date: string;
  description: any;
  image: any;
  title: any;
}
