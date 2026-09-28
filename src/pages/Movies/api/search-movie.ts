import type { SearchMovieQueryParams, SearchMovieResponse } from "../models/movies";
import { AXIOS_INSTANCE } from "../../../core/api/axios-instance";

export async function searchMovie(params: SearchMovieQueryParams): Promise<SearchMovieResponse> {
  const response = await AXIOS_INSTANCE.get<SearchMovieResponse>('search/movie', {params});
  return response.data;
}