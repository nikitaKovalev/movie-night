import type { SearchMovieQueryParams, SearchMovieResponse } from "../models/movies";
import { AXIOS_INSTANCE } from "../../../core/api/axios-instance";
import { responseDelay } from "../../../core/helpers/response-delay";

export async function searchMovie(params: SearchMovieQueryParams): Promise<SearchMovieResponse> {
  const response = await AXIOS_INSTANCE.get<SearchMovieResponse>('search/movie', {params});
  return responseDelay(response.data);
}