import { AXIOS_INSTANCE } from "../../../core/api/axios-instance";
import type { MovieDetails } from "../models/movie";

export async function getMovie(movieId: number): Promise<MovieDetails> {
  const response = await AXIOS_INSTANCE.get(`movie/${movieId}`);
  return response.data;
}