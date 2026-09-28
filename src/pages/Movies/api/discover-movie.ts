import { AXIOS_INSTANCE } from "../../../core/api/axios-instance";
import { responseDelay } from "../../../core/helpers/response-delay";
import type { DiscoverMovieQueryParams, DiscoverMovieResponse } from "../models/movies";

export async function discoverMovie(params: DiscoverMovieQueryParams): Promise<DiscoverMovieResponse> {
  const response = await AXIOS_INSTANCE.get('discover/movie', {params});
  return responseDelay(response.data);
}