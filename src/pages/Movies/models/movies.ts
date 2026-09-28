export interface SearchMovieQueryParams {
  query: string;
  page: number;
}

export interface SearchMovieResponse {
  page: number;
  results: MovieShort[];
  total_pages: number;
  total_results: number;
}

export interface MovieShort {
  id: number;
  title: string;
  original_title: string;
  
  overview: unknown;
  
  poster_path: string;
  backdrop_path: string;
  
  release_date: string;
  
  genre_ids: number[];
  
  vote_average: number;
  vote_count: number;
  
  popularity: number;
}